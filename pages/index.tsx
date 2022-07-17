import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Shadows Instruments</title>
        <meta name='description' content='Some Instruments' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
        SHADOW INSTRUMENTS
        </h1>
        
        <div className='text-center w-9/12' >
              <img src='/arc.png' />
          </div>

        {/* <p className={styles.description}>
          Get started by checking out our tools below<br/>
        </p> */}

        <div className='grid'>
          {/* <a href="bulktransfer" className={styles.card} >
            <h2 className='font-bold text-sm'> BULK TRANSFER ⚡</h2>
            <p>Transfer more than 1 NFT to another wallet. Fee-free. Gas only.</p>
          </a>

          <a href="/" className={styles.card}>
          <h2 className='font-bold'> STOVE /BURN/ 🔥</h2>
            <p>Burn any known/unknown spl-token or NFT.</p>
          </a>

          <a
            href="https://staking.theshadyclass.xyz/"
            className={styles.card}
          >
          <h2 className='font-bold'> STAKING /$CRIM/ ⛏️</h2>
            <p>Stake your shadow NFTs for $CRIM token yields.</p>
          </a> */}

          
          <a href="https://twitter.com/theshadyclass" className={styles.card}>
            <h2>⚡ FOLLOW US ON TWITTER ⚡<br/></h2>
            <p>Our Beta test phase is done. <br/> 
              Click above to know when the next phase will be available!<br/>
              BULK NFT Transfer and Stove will be back.</p>
          </a>
          <br/> 
          <br/> 
          <br/> 
          <br/> 
          <a href="https://magiceden.io/marketplace/tshc" className={styles.card}>
            <h2>👻 BE A SHADOW 👻<br/> </h2>
            <p>Check us out on MagicEden!<br/> </p>
          </a>
          <br/> 
          <br/> 
          <br/> 

        </div>

      </main>

      <div className='w-full bg-gray-900 text-white p-6 text-center'>
      <h2 className='mt-2 text-xs w-full'>Coded in the Shadows | 👻 TSC Buidl. _A NFT Project.</h2>
            <a href="https://discord.gg/b39NXR6">
          <h2 className='text-xs font-bold mb-2 mt-2'> CLICK HERE TO JOIN OUR DISCORD! ⌛</h2>
          </a>
      </div>


    </div>
  )
}

export default Home
