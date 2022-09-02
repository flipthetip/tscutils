import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Shadow Instruments</title>
        <meta name='description' content='Just a simple Asset Manager/Suite in the Solana Blockchain. Coded in the Shadows | 👻 The Shady Class Buidl' />
        <link rel='icon' href='/favicon.ico' />
      </Head>



      <main className={styles.main}>
        {/* <h1 className={styles.title}>

        <br/>SHADOW INSTRUMENTS
        </h1>
        <br/> */}
              <Navbar />
          <div className='pl-20 mt-2 w-9/12 md:w-3/12 sm:w-3/12 xs:w-3/12 rounded-none'>
              <img src='/arc.png' />
          </div>

        {/* <p className={styles.description}>
          Get started by checking out our tools below<br/>
        </p> */}

        <div className='grid grid-col-2 text-xs'>
          <a href="bulktransfer" className={styles.card} >
            <h4 className='font-bold md:pl-12'> BULK NFT TRANSFER</h4>
            <p className=' md:pl-12'>Transfer more than 1 NFT to another wallet in 1 transaction. Fee-free. Gas only.</p>
          </a>
          <br/>


          <a href="stove" className={styles.card}>
          <h4 className='font-bold  md:pl-12'> STOVE / TOKEN BURNER</h4>
            <p className=' md:pl-12'>Burn any known/unknown spl-token or NFT.</p>
          </a>
          <br/>


          <a
            href="https://staking.theshadyclass.xyz/"
            className={styles.card}
          >
          <h4 className='font-bold  md:pl-12'> STAKING PLATFORM</h4>
            <p className=' md:pl-12'>Stake your TSC NFTs for $CRIM token yields.<br/></p>

          </a>
          <br/>
          <a
            href="http://collector.theshadyclass.xyz/"
            className={styles.card}
          >
          <h4 className='font-bold text-amber-500  md:pl-12'>THE COLLECTOR 🔥NEW🔥</h4>
            <p className='text-amber-500  md:pl-12'>Collect your un-used on-chain SOL.<br/></p>

          </a>
          <br/>
          <a
            href="https://magiceden.io/marketplace/tshc"
            className={styles.card}
          >
          <h2 className='font-bold text-white md:pl-12'>BECOME A SHADOW</h2>
            <p className='text-white md:pl-12'>Advanced and Free Access to holders. Check out our NFT collection in Magiceden.<br/></p>

          </a>
          <br/>
          <br/>
          


          
          {/*<a href="minthash" className={styles.card}>
            <h2>Mint Hash Getter&rarr;</h2>
            <p>Get your mint hash list here, anon!</p>
          </a>

          <a href="holdersnapshot" className={styles.card}>
            <h2>Holder Snapshot&rarr;</h2>
            <p>Get your holder list here, anon!</p>
          </a>*/}
          

        </div>
        <br/>
          <br/>
        <a href="https://discord.gg/7SrNbVyHDD">
        <h2 className='ml-12 md:ml-20 mb-6 text-xs pt-1 pb-1 text-white text-center w-9/12 md:w-3/12 sm:w-2/12 xs:w-1/12 bg-red-700 rounded-box'>          
        Coded in the Shadows | 👻 The Shady Class Buidl</h2>
        </a>
      </main>
      {/* <div className='pl-auto text-center bg-none w-full'>
        <a href="https://discord.gg/b39NXR6">
        <h2 className='text-xs pt-2 pb-2 text-white bg-red-700 rounded-box w-6/12'>          
        Coded in the Shadows | 👻 TSC Buidl | CLICK HERE TO JOIN OUR DISCORD</h2>
        </a>
        </div> */}
    </div>
  )
}

export default Home
