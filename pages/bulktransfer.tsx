import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { useMemo, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Transaction, PublicKey } from '@solana/web3.js'
import { gql } from '@apollo/client'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import client from '../client'
import { Button } from 'antd'

//@ts-ignore
import { createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID, createTransferInstruction} from '@solana/spl-token'
import { NftRow } from '../components/nftRow'
import * as ga from '../lib/ga'

import {Nft} from '../types'


const BulkTransfer: NextPage = () => {

  const { publicKey, signTransaction, connected } = useWallet()
  const { connection } = useConnection()
  const [nfts, setNfts] = useState<Nft[]>([])
  const [sending, setSending] = useState<Nft[]>([])
  const [to, setTo] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState<boolean>(false)
  const [feedbackStatus, setFeedbackStatus] = useState("")

  const massSend = async (list: Nft[], to: string) => {
    setLoading(true)
    
    if (to == '') {
      toast.error('no dest')
      setLoading(false)
      setFeedbackStatus("🤦‍♂️ NO RECEIVER SER, YOU DUMMY...")

      return{
        feedbackStatus,
      }
    } else {
      try {
        console.log('to: ', to)
        new PublicKey(to)
        console.log('valid dest address: ', to)
      } catch (e) {
        console.log('Invalid address')
        setTo('')
        setLoading(false)
        setFeedbackStatus("🤦‍♂️ Wrong address ser.. Fool of a took.")

        return{
          feedbackStatus,
        }
      }
    }

    if (!list || !connection || !publicKey || !signTransaction) {
      console.log('returning')
      setLoading(false)
      setFeedbackStatus("🤦‍♂️ NO SIG SER..")
      return{
        feedbackStatus,
      }
    }

    if (!list.length) {
      console.log('probably want to select some nfts')
      setLoading(false)

    }

    const tx = new Transaction()
    console.log('trying to send ', list.length, ' nfts')
    for (var i = 0; i < list.length; i++) {
      const mintPublicKey = new PublicKey(list[i].mintAddress)
      const fromTokenAccount = await getAssociatedTokenAddress(
        mintPublicKey,
        publicKey
        
      )
      const fromPublicKey = publicKey
      const destPublicKey = new PublicKey(to)
      const destTokenAccount = await getAssociatedTokenAddress(
        mintPublicKey,
        destPublicKey
      )
      const receiverAccount = await connection.getAccountInfo(destTokenAccount)

      if (receiverAccount === null) {
        tx.add(
          createAssociatedTokenAccountInstruction(
            fromPublicKey,
            destTokenAccount,
            destPublicKey,
            mintPublicKey,
            TOKEN_PROGRAM_ID,
            ASSOCIATED_TOKEN_PROGRAM_ID
          )
        )
      }

      tx.add(
        createTransferInstruction(
          fromTokenAccount,
          destTokenAccount,
          fromPublicKey,
          1
        )
      )
      
      setFeedbackStatus("💪 Werkin hard for you ser...")
    }

    
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
    tx.feePayer = publicKey
    setFeedbackStatus("✍️ SIGN yer Phantom ser..")

    let signed: Transaction | undefined = undefined

    try {
      signed = await signTransaction(tx)

    } catch (e: any) {
      toast(e.message)
      setLoading(false)
      setFeedbackStatus("❌ Transfer exceeds hard limit (7-8 NFTs per transfer). Or you REJECTED Phantom ser.")

      return{
        feedbackStatus,
      }
    }

    let signature: string | undefined = undefined

    try {
      signature = await connection.sendRawTransaction(signed.serialize())

      await connection.confirmTransaction(signature, 'confirmed') 
        toast.success('Transaction successful')
        ga.event({
          action: 'multisend_success',
          params: { count: sending.length }
        })
        sending.map(n => {
          setNfts(nfts.filter(n => !sending.includes(n)))
        })
        setSending([])
        setLoading(false)
        setFeedbackStatus("🤝 SUCCESS SER! Now off you go..")
      }

    catch (e: any) {
      toast.error(e.message)
      setLoading(false)
      ga.event({
        action: 'multisend_error',
        params: { msg: e.message }
      })
      setFeedbackStatus("😒 IT ERROR'D SER. Try again.")


    }
    return{
      feedbackStatus,
    }
  }

  const GET_NFTS = gql`
    query GetNfts($owners: [PublicKey!], $limit: Int!, $offset: Int!) {
      nfts(owners: $owners, limit: $limit, offset: $offset) {
        address
        mintAddress
        name
        description
        image
        owner {
          address
          associatedTokenAccountAddress
        }
      }
    }
  `

  useMemo(() => {
    if (publicKey?.toBase58()) {
      client
        .query({
          query: GET_NFTS,
          variables: {
            owners: [publicKey?.toBase58()],
            offset: 0,
            limit: 10000
          }
        })
        .then(res => setNfts(res.data.nfts))
    } else {
      setNfts([])
      setSending([])
      setTo('')
    }
  }, [publicKey?.toBase58()])

  return (
    <div>

      
      <Head>
        <title>BULK NFT TRANSFER</title>
        <meta name='description' content='Send multiple NFTs at once!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <div className='drawer drawer-end'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content bg-gray-900 text-white tracking-tight text-center'>
          <Navbar sending={sending} />
          <h2 className='font-bold m-2 mt-10'>⚡ BULK NFT TRANSFER - TRANSFER NFTS TO ANOTHER WALLET FEE-FREE ⚡</h2>
          <div className='w-full mb-4'>
          <h2 className='font-bold text-sm'> HOW MANY :&nbsp;&nbsp;&nbsp; 
          <span className='indicator-item badge-lg rounded-full bg-amber-500 text-xl text-white'>
          {sending.length}
          </span></h2>
          <h1 className='mr-10 ml-10 mt-2'>STATUS : {feedbackStatus} </h1>

          </div>
          <div className='w-full mb-6'>
            <input
              type='text'
              placeholder='NFT SEARCH..'
              className='w-8/12 h-80% input input-bordered rounded-none border-black text-black text-lg'
              onChange={e => setSearch(e.target.value)}
            />
          </div>

            <div className='w-full mb-4'>
              {sending.length > 0 ? (
              <>

                  <input
                    type='text'
                    className='w-6/12 max-w-xs input input-bordered m-1 text-gray-600 rounded-none'
                    placeholder='Paste the recipient wallet'
                    onChange={e => {
                      setTo(e.target.value)
                    }}
                  />


                  <Button
                    loading={loading}
                    id='btn-copy'
                    type='primary'
                    className='btn max-w-sm hover:text-white hover:bg-amber-500 m-1 tracking-wider rounded-none w-6/12'
                    onClick={() => {
                      // setLoading(true)
                      massSend(sending, to)
                      // setLoading(false)
                    }}
                  >
                    FLY YOU FOOLS
                  </Button>

              </>
            ) : (
              <>
                SELECT WHAT YOU WANNA TRANSFER
              </>
            )}
          </div>

          <div className='container px-4'>
            <div className='ml-6 mr-6 mb-20 grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {nfts
                .filter(n => n.name.toLowerCase().includes(search.toLowerCase()))
                .map(n => (
                  <NftRow
                    key={Math.random()}
                    name={n.name}
                    address={n.address}
                    mintAddress={n.mintAddress}
                    image={n.image}
                    unselect={() => {
                      setSending(sending.filter(item => item !== n))
                    }}
                    select={() => {
                      setSending([...sending, n])
                    }}
                    selected={sending.includes(n)}
                  />
                ))}
            </div>

          </div>
          <div className='w-full bg-gray-900 text-white p-6 text-center'>
      <h2 className='mt-2 text-xs w-full'>Coded in the Shadows | 👻 TSC Buidl</h2>
            <a href="https://discord.gg/b39NXR6">
          <h2 className='text-xs font-bold mb-2 mt-2'> CLICK HERE TO JOIN OUR DISCORD! ⌛</h2>
          </a>
      </div>
        </div>

        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content'>
              {sending.map(n => (
              <li key={Math.random()}>
                <NftRow
                  name={n.name}
                  address={n.address}
                  mintAddress={n.mintAddress}
                  image={n.image}
                  unselect={() => {
                    setSending(sending.filter(item => item !== n))
                  }}
                  select={() => {
                    setSending([...sending, n])
                  }}
                  selected={sending.includes(n)}
                />
              </li>
            ))}
            {sending.length > 0 ? (
              <>
                <li key={Math.random()}>
                  <input
                    type='text'
                    className='w-full max-w-xs input input-bordered rounded-none'
                    placeholder='Enter Wallet Address'
                    onChange={e => {
                      setTo(e.target.value)
                    }}
                  />
                </li>
                <li key={Math.random()}>
                  <Button
                    loading={loading}
                    id='btn-copy'
                    type='primary'
                    className='block btn btn-secondary hover:text-black rounded-none m-4'
                    onClick={() => {
                      // setLoading(true)
                      massSend(sending, to)
                      // setLoading(false)

                    }
                  }
                  >
                    TRANSFER!
                  </Button>
                </li>
              </>
            ) : (
              <>
                👻
              </>
            )}


          </ul>
        </div>
      </div>
    </div>
  )


}

export default BulkTransfer
