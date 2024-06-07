import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
    
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
  return (
    <div className=' overflow-hidden fixed w-[100vw] z-50  bg-[#2b2626b2] shadow-md h-[5rem] px-[3%]'>
      <div className='max-w-[1400px] h-[100%] w-[100%]'>
       <div className='flex justify-between text-white items-center align-middle max-md:pt-[0.7rem] md:pt-[0.5rem]'>
        <div className=' flex  gap-2 justify-center items-center '>
            <img src={require('../Assets/kogo.png')} className='md:w-[5rem] max-md:w-[4rem]' alt="" />
            <h1 className='md:text-[30px] font-bold text-orange-400  md:leading-[30px] max-md:leading-[15px] uppercase max-md:text-[17px]'>Sri Ganesh<br/> <span  className='md:text-[20px] md:leading-[20px] max-md:text-[10px] text-white'>Tours & Travels </span></h1>
        </div>
        <div className='text-[18px] font-[700] ml-[10%] max-lg:hidden leading-[30px] capitalize'>
            <ul className='flex gap-5'>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='/'>Home</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#about'>About</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                <a href="#test">Clients</a>
                </li>
                {/* <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#blog'>Blog</a>
                </li> */}
                <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#services'>Services</a>
                </li>
                <li className='hover:text-orange-400 transition-all tracking-wider' >
                    <a href='/#gallery'>Gallery</a>
                </li>
                {/* <li className='hover:text-orange-400 transition-all tracking-wider'>
                    <a href='#gallery'>Gallery</a>
                </li> */}
                <li className='hover:text-orange-400 transition-all tracking-wider' >
                    <a href='/#contact'>Contact</a>
                </li>
               
               
                
            </ul>
        </div>
        <div>
        <CiMenuFries onClick={()=>openNav()}  className='text-[2rem] md:hidden'/>
        </div>
        <div className='flex gap-5 text-[18px] max-md:hidden font-semibold tracking-wider leading-[30px]'>
                <SignedIn>
        <UserButton afterSignOutUrl={window.location.href} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
            {/* <a href='#' className='text-gray-900 hover:text-orange-400'> */}
      {/* </a> */}
            <a href='tel: 98456 01599' className='border-0 max-md:hidden px-[1rem] rounded-l-full py-1 rounded-r-full text-white bg-orange-400'>+91 98456 01599</a>
        </div>
      </div>
      </div>
      <div id="myNav" className="overlay">
  <div className="closebtn text-white cursor-pointer text-sm" onClick={()=>closeNav()}>x</div>
  <div className="overlay-content">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href='/#gallery'>Gallery</a>
    <a href="#test">Clients</a>
    <a href="#contact">Contact</a>
    <div className='flex text-white flex-col gap-5 text-[18px]  justify-center items-center mt-[2rem] font-semibold tracking-wider leading-[30px]'>
                <SignedIn>
        <UserButton afterSignOutUrl={window.location.href} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
            {/* <a href='#' className='text-gray-900 hover:text-orange-400'> */}
      {/* </a> */}
            <a href='tel: 98456 01599' className='border-0 px-[1.5rem] rounded-md   py-1 text-black bg-orange-400'>Connect</a>
        </div>
  </div>
</div>
    </div>
  )
}
