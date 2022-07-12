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
        
        <div className='mr-12 mt-4 w-6/12 rounded-none'>
              <img src='/arc.png' />
          </div>

        {/* <p className={styles.description}>
          Get started by checking out our tools below<br/>
        </p> */}

        <div className='grid'>
          <a href="bulktransfer" className={styles.card} >
            <h2 className='font-bold text-sm'> BULK TRANSFER ⚡</h2>
            {/*<p>Transfer more than 1 NFT to another wallet. Fee-free. Gas only.</p>*/}
          </a>

          <a href="stove" className={styles.card}>
          <h2 className='font-bold'> STOVE /BURN/ 🔥</h2>
            {/*<p>Burn any known/unknown spl-token or NFT.</p>*/}
          </a>

          <a
            href="https://staking.theshadyclass.xyz/"
            className={styles.card}
          >
          <h2 className='font-bold'> STAKING /$CRIM/ ⛏️</h2>
            {/*<p>Stake your shadow NFTs for $CRIM token yields.</p>*/}
          </a>

          
          {/*<a href="minthash" className={styles.card}>
            <h2>Mint Hash Getter&rarr;</h2>
            <p>Get your mint hash list here, anon!</p>
          </a>

          <a href="holdersnapshot" className={styles.card}>
            <h2>Holder Snapshot&rarr;</h2>
            <p>Get your holder list here, anon!</p>
          </a>*/}
          

        </div>

      </main>

      <div className='w-full bg-gray-900 text-white p-6 text-center'>
      <h2 className='mt-2 text-xs w-full'>Coded in the Shadows | 👻 TSC Buidl</h2>
            <a href="https://discord.gg/b39NXR6">
          <h2 className='text-xs font-bold mb-2 mt-2'> CLICK HERE TO JOIN OUR DISCORD! ⌛</h2>
          </a>
      </div>


    </div>
  )
}

export default Home
