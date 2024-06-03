import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import React from 'react'

export default function Header() {
  return (
    <div className=' overflow-hidden fixed w-[100vw] z-50  bg-white shadow-md h-[5rem] px-[3%]'>
      <div className='max-w-[1400px] h-[100%] w-[100%]'>
       <div className='flex justify-between items-center align-middle pt-[1.4rem]'>
        <div className=' flex justify-center items-center '>
            <h1 className='lg:text-2xl sm:text-xl font-bold text-gray-900'>Ganesh travels</h1>
        </div>
        <div className='text-[18px] font-[700] max-lg:hidden leading-[30px] capitalize'>
            <ul className='flex gap-5'>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='/'>Home</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#about'>About</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#contact'>Contact</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#blog'>Blog</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#services'>Services</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#gallery'>Gallery</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider' >
                    <a href='#contect'>Contact</a>
                </li>
            </ul>
        </div>
        <div className='flex gap-5 text-[18px] font-semibold tracking-wider leading-[30px]'>
                <SignedIn>
        <UserButton afterSignOutUrl={window.location.href} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
            {/* <a href='#' className='text-gray-900 hover:text-orange-400'> */}
      {/* </a> */}
            <a href='#book' className='border-0 max-md:hidden px-[1rem] rounded-l-full py-1 rounded-r-full text-white bg-orange-400'>Book Now</a>
        </div>
      </div>
      </div>
    </div>
  )
}
