import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { useMemo, useState } from 'react'
//@ts-ignore
import { TOKEN_PROGRAM_ID, createBurnInstruction, createCloseAccountInstruction} from '@solana/spl-token'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Transaction, PublicKey } from '@solana/web3.js'
import { gql } from '@apollo/client'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import client from '../client'
import { Button } from 'antd'

import { NftRow } from '../components/nftRow'
import * as ga from '../lib/ga'
import { Nft } from '../types'

const Stove: NextPage = () => {
  const { publicKey, signTransaction, connected } = useWallet()
  const { connection } = useConnection()
  const [nfts, setNfts] = useState<Nft[]>([])
  const [sending, setSending] = useState<Nft[]>([])
  const [to, setTo] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedbackStatus, setFeedbackStatus] = useState("")


  const burn = async (list: Nft[]) => {
    setLoading(true)
    if (!list || !connection || !publicKey || !signTransaction) {
      console.log('returning')
      setLoading(false)
      return
    }

    if (!list.length) {
      console.log('probably want to select some nfts')
      setLoading(false)
      return
    }

    const tx = new Transaction()

    for (var i = 0; i < list.length; i++) {
      tx.add(
        createBurnInstruction(
          new PublicKey(list[i].owner.associatedTokenAccountAddress),
          new PublicKey(list[i].mintAddress),
          publicKey,
          1,
          [],
          TOKEN_PROGRAM_ID
        )
      )
      tx.add(
        createCloseAccountInstruction(
          new PublicKey(list[i].owner.associatedTokenAccountAddress),
          publicKey,
          publicKey,
          [],
          TOKEN_PROGRAM_ID
        )
      )
    }
    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
    tx.feePayer = publicKey
    setFeedbackStatus("⚠️ You are BURNING ser. Make sure of your action ser..")

    let signed: Transaction | undefined = undefined

    try {
      signed = await signTransaction(tx)
    } catch (e: any) {
      toast(e.message)
      setLoading(false)
      return
    }

    let signature: string | undefined = undefined

    try {
      signature = await connection.sendRawTransaction(signed.serialize())
      await connection.confirmTransaction(signature, 'confirmed')

      toast.success('Transaction successful')
      ga.event({
        action: 'burn_success',
        params: { count: sending.length }
      })
      sending.map(n => {
        setNfts(nfts.filter(n => !sending.includes(n)))
      })
      setSending([])
      setLoading(false)
      setFeedbackStatus("🤝 SUCCESS SER! Now off you go..")

    } catch (e: any) {
      toast.error(e.message)
      setLoading(false)
      ga.event({
        action: 'burn_error',
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
        <title>STOVE</title>
        <meta name='description' content='Put it in the stove and never look back.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='drawer drawer-end'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content bg-rose-900 text-gray-50 tracking-tight text-center'>
          <Navbar sending={sending} />
          <h2 className='font-bold m-2 mt-10'>🔥 STOVE - YOU ARE GONNA BURN TOKENS. PROCEED WITH CAUTION! 🔥</h2>
          <div className='w-full mb-4'>
          <h2 className='font-bold text-sm'> HOW MANY :&nbsp;&nbsp;&nbsp; 
          <span className='indicator-item badge bg-amber-500 text-xl'>
          {sending.length}
          </span></h2>
          <h1 className='mr-10 ml-10 mt-2 mb-4'>STATUS : {feedbackStatus} </h1>

          </div>
          <div className='w-full mb-6'>
          <input
              type='text'
              placeholder='NFT SEARCH..'
              className='w-8/12 h-fit input input-bordered rounded-none border-black text-gray-600'
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className='w-full mb-4'>
              {sending.length > 0 ? (
              <>
                  <Button
                    loading={loading}
                    id='btn-copy'
                    type='primary'
                    className='btn btn-amber-500 hover:text-white hover:bg-amber-500 m-1 tracking-wider rounded-none w-auto'
                    onClick={() => {
                      burn(sending)
                    }}
                  >
                    BURN BABY BURN!
                  </Button>

              </>
            ) : (
              <>
                SELECT WHAT YOU WANNA BURN
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
            <h2 className='mt-2 text-xs'>Coded in the Shadows | 👻 TSC Buidl</h2>
            <a href="discord.gg/b39NXR6">
          <h2 className='text-xs font-bold mb-6 mt-2'> CLICK HERE TO JOIN OUR DISCORD! ⌛</h2>
          </a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Stove
