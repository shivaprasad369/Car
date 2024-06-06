
import React from 'react'

export default function Header() {

  return (
    <div className=' overflow-hidden fixed w-[100vw] z-50  bg-[#2b2626b2] shadow-md h-[5rem] px-[3%]'>
      <div className='max-w-[1400px] h-[100%] w-[100%]'>
       <div className='flex justify-between text-white items-center align-middle max-md:pt-[0.8rem] md:pt-[0.5rem]'>
        <div className=' flex justify-center items-center '>
            <img src={require('../Assets/kogo.png')} className='md:w-[5rem] max-md:w-[4rem]' alt="" />
        </div>
       
        {/* <div>
        <CiMenuFries className='text-[2rem] md:hidden'/>
        </div> */}
        <div className='flex gap-5 text-[18px]  font-semibold tracking-wider leading-[30px]'>
                {/* <SignedIn>
        <UserButton afterSignOutUrl={window.location.href} />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut> */}
            {/* <a href='#' className='text-gray-900 hover:text-orange-400'> */}
      {/* </a> */}
            <a href='tel:836 225 1917' className='border-0  px-[1rem] rounded-l-full py-1 rounded-r-full text-white bg-orange-400'>+91 836 225 1917</a>
        </div>
      </div>
      </div>
     
    </div>
  )
}
