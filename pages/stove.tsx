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

const approvedAccounts = ['Web3 Chibis in the Solana network. 3,333 chibified avatars ready to take on the metaverse and save the decentralization movement. The Shady Class is the OG NFT Collection under under W3B Industries.']


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

  const [allowed, setAllowed] = useState(false)

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

  useMemo(()=>{
    nfts.map((nft)=>{
      if (approvedAccounts.includes(nft.description)){
        console.log('approved')
        setAllowed(true)
      }
    })
  }, [nfts])

  return (
    <div>
      <Head>
        <title>STOVE</title>
        <meta name='description' content='Put it in the stove and never look back.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='drawer drawer-end items-center'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content bg-red-900 text-white tracking-tight text-center bg-gradient-to-r from-stone-900 to-red-900'>
          <Navbar sending={sending} />
          <div className='container px-4 w-full text-left m-6'>
            {!connected && (<h1>HOLDER VERIFICATION</h1>)}
            { connected && (<>
            <h1 className='font-bold text-xs'>Wallet: {publicKey?.toBase58()}</h1>
            {allowed ? <h1 className='text-sm text-green-500 mr-12'>You're a verified holder! Your support will help us build more fun stuff in Solana. 🔥 Also, you'll pass token-gating if we ever implement it.  ✅</h1>
            : 
            <a
            href="https://magiceden.io/marketplace/tshc"
            >
            <h1 className='text-sm text-red-500 font-bold  mr-12'>You don't hold any TSC NFT. 👻 As we might token-gate our features in the near-future, click here to get one in secondary.</h1>
            </a>}
            </>)
            }
          </div>
          <p className='m-2 mt-6 ml-10 text-left text-xs tracking-wider'>
            Notes:<br/>
            1. &nbsp;Current version has a 6-12hour lag of the burned NFTs to disappear from the site list. Trying to burn it again will just fail.<br/>
            2. &nbsp;If you don't know yet, burned NFTs refund the "on-chain rent" SOL back to your wallet.<br/>
            3. &nbsp;IMPORTANT! Burning is permanent! Make sure you're burning the correct NFTs.
            </p>
          <h2 className='font-bold m-2 mt-6'>🔥 STOVE - YOU ARE GONNA BURN TOKENS. PROCEED WITH CAUTION! 🔥</h2>
          <div className='w-full mb-4'>
          <h2 className='font-bold text-sm'> HOW MANY :&nbsp;&nbsp;&nbsp; 
          <span className='indicator-item badge-lg rounded-full bg-amber-500 text-xl text-white'>
          {sending.length}
          </span></h2>
          <h1 className='mr-10 ml-10 mt-2 mb-4'>STATUS : {feedbackStatus} </h1>

          </div>
          <div className='w-full mb-6'>
          <input
              type='text'
              placeholder='NFT SEARCH..'
              className='w-8/12 h-80% input input-bordered rounded-none border-black text-black'
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
                .sort ((a: Nft, b:Nft) => {
                  if (a.name > b.name) return 1;
                  else if (a.name < b.name) return -1;
                  else return 0;
                })
                
                .map(n => (
                  <NftRow
                  key={Math.random()}
                  name={n.name}
                  address={n.address}
                  mintAddress={n.mintAddress}
                  image={n.image}
                  symbol={n.symbol}
                  showHidden
                    unselect={() => {
                      setSending(sending.filter(item => item !== n))
                    }}
                    select={() => {
                      setSending([...sending, n])
                    }}
                    selected={sending.includes(n)}
                  />
                ))
                }
            </div>


          <div className='ml-6 mr-6 mb-20 grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {nfts
                .filter(n => n.name.toLowerCase().includes(search.toLowerCase()))
                // .reduce((x, y) => {
                // let nepti = y.name
                // if  (nepti in x) {
                //   return {...x, [nepti]: x[nepti].concat(y)
                //   }
                // }
                // return {...x, [nepti]: [y]}
                //   },
                // {}

                
                // )

                .map(n => (
                  <NftRow
                  key={Math.random()}
                  name={n.name}
                  address={n.address}
                  mintAddress={n.mintAddress}
                  image={n.image}
                  symbol={n.symbol}
                  showHidden
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

            <div className='ml-6 mr-6 mb-20 grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {nfts
                .filter(n => n.name.toLowerCase().includes(search.toLowerCase()))
                .sort ((a: Nft, b:Nft) => {
                  if (a.name > b.name) return 1;
                  else if (a.name < b.name) return -1;
                  else return 0;
                })
                .map(n => (
                  <NftRow
                  key={Math.random()}
                  name={n.name}
                  address={n.address}
                  mintAddress={n.mintAddress}
                  image={n.image}
                  symbol={n.symbol}
                  showHidden
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
          <a href="https://discord.gg/7SrNbVyHDD">
        <h2 className='ml-12 md:ml-20 mb-6 text-xs pt-1 pb-1 text-white text-center w-9/12 md:w-3/12 sm:w-2/12 xs:w-1/12 bg-red-700 rounded-box'>          
        Coded in the Shadows | 👻 The Shady Class Buidl</h2>
        </a>
          {/* <div className='pl-auto text-center bg-red-700 w-full'>
        <a href="https://discord.gg/b39NXR6">
        <h2 className='text-xs pt-2 pb-2 text-white bg-red-700 rounded-box'>          
        Coded in the Shadows | 👻 TSC Buidl | CLICK HERE TO JOIN OUR DISCORD</h2>
        </a>
        </div> */}
        </div>


      </div>
    </div>
  )
}

export default Stove
