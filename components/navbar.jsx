import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import Link from 'next/link'
import { useState } from 'react'

export const Navbar = props => {
  return (
    <div className='navbar bg-none text-white text-xs max-h-1 md:pl-2 pr-12'>
      <div className='navbar-start'>       
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
          {/* SHADIES TOOL KIT */}
          <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='red'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>


          </label>

          <ul
            tabIndex='0'
            className='p-1 mt-2 shadow menu menu-compact dropdown-content bg-red-700 rounded-box w-52 pr-0'
          >
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                HOME 👻
              </button>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                TRADING SUITE 🤖
              </button>
            </Link>
          </li>
        <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                VAULT 🔐
              </button>
            </Link>
          </li>
          <li>
            <Link href='bulktransfer' passHref>
              <button className='tracking-wide uppercase'>
                BULK TRANSFER ⚡
              </button>
            </Link>
          </li>
          <li>
            <Link href='http://collector.theshadyclass.xyz/' passHref>
              <button className='tracking-wide uppercase'>
                COLLECTOR 🔱
              </button>
            </Link>
          </li>
          <li>
            <Link href='https://staking.theshadyclass.xyz/' passHref>
              <button className='tracking-wide uppercase'>
                STAKING ⛏️
              </button>
            </Link>
          </li>
          <li>
            <Link href='https://magiceden.io/marketplace/tshc' passHref>
              <button className='tracking-wide uppercase'>
                MAGICEDEN ✨
              </button>
            </Link>
          </li>
            <li>
            <WalletMultiButton className='max-h-5' />
            </li>
            <div className=' mt-4 w-full rounded-none content-center text-xs mb-2'>
            Coded in the Shadows | 👻 TSC Buidl
            </div>
          </ul>
        </div>

      </div>

        <div className='bg-red-700 hidden navbar-center lg:flex rounded-box'>

        <ul className='shadow-white menu menu-horizontal'>

        <li>
            <Link href='/' passHref> 
              <button className='tracking-wide font-bold uppercase'>
                HOME
              </button>
            </Link>
          </li>
          {/* <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost'>
          SHADIES TOOL KIT ✨

          </label>
          <ul
            tabIndex='0'
            className='p-1 mt-2 shadow menu menu-compact dropdown-content bg-red-700 rounded-box w-52 pr-0'
          >
          <li>
            <Link href='https://magiceden.io/marketplace/tshc' passHref>
              <button className='tracking-wide uppercase'>
                SHADIES TOOL KIT ✨
              </button>
            </Link>
          </li> 
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
              VAULT
              </button>
            </Link>
          </li>
          <li>
            <Link href='bulktransfer' passHref>
              <button className='tracking-wide uppercase'>
                BULK TRANSFER
              </button>
            </Link>
          </li> */}
          <li>
          <label tabIndex='0' className='btn btn-ghost'>
          SHADIES TOOL KIT

          </label>

          <ul
            tabIndex='0'
            className='p-1 shadow menu dropdown-content bg-red-700 border-8 rounded-md rounded-none w-64'
          >
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                TRADING SUITE 🤖 (COMING SOON)
              </button>
            </Link>
          </li>
        <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                VAULT 🔐 (COMING SOON)
              </button>
            </Link>
          </li>
          <li>
            <Link href='bulktransfer' passHref>
              <button className='tracking-wide uppercase'>
                BULK TRANSFER ⚡
              </button>
            </Link>
          </li>
          {/* <li>
            <Link href='https://staking.theshadyclass.xyz/' passHref>
              <button className='tracking-wide uppercase'>
                STAKING ⛏️
              </button>
            </Link>
          </li> */}
          <li>
            <Link href='http://collector.theshadyclass.xyz/' passHref>
              <button className='tracking-wide uppercase'>
                COLLECTOR 🔱
                
              </button>
            </Link>
          </li>
          {/* <li>
            <Link href='https://magiceden.io/marketplace/tshc' passHref>
              <button className='tracking-wide uppercase'>
                MAGICEDEN ✨
              </button>
            </Link>
          </li> */}
            {/* <li>
            <WalletMultiButton className='max-h-5' />
            </li>
            <div className=' mt-4 w-full rounded-none content-center text-xs mb-2'>
            Coded in the Shadows | 👻 TSC Buidl
            </div> */}
          </ul>
          </li>
          {/* <li>
            <Link href='nftminter' passHref>
              <button className='tracking-wide uppercase'>
                NFT Minter
              </button>
            </Link>
          </li> 
          <li>
            <Link href='gatedentry' passHref>
              <button className='tracking-wide uppercase'>
                GETTED
              </button>
            </Link>
          </li>
          <li>
            <Link href='minthash' passHref>
              <button className='tracking-wide uppercase'>
                HASHER
              </button>
            </Link>
          </li>
          <li>
            <Link href='holdersnapshot'>
              <button className='tracking-wide uppercase'>
                SNAPPER
              </button>
            </Link>
          </li>
          <li>
            <Link href='multisend' passHref>
              <button className='tracking-wide uppercase'>
                BURNT
              </button>
            </Link>
          </li> 
*/}
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide font-bold uppercase'>
                VESSELS
              </button>
            </Link>
          </li>
          <li>
            <Link href='https://staking.theshadyclass.xyz/' passHref>
              <button className='tracking-wide font-bold uppercase'>
                STAKING
              </button>
            </Link>
          </li>
          <li>
            <Link href='https://magiceden.io/marketplace/tshc' passHref>
              <button className='tracking-wide font-bold uppercase'>
                MAGICEDEN ✨
              </button>
            </Link>
          </li>
          <li>

            <WalletMultiButton className='max-h-5' />

          </li>

          </ul>
      </div>
    </div>
  )
}
