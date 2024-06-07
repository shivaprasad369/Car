
import React from 'react'

export default function Header() {

  return (
    <div className=' overflow-hidden fixed w-[100vw] z-50  bg-[#2b2626b2] shadow-md h-[5rem] px-[3%]'>
      <div className='max-w-[1400px] h-[100%] w-[100%]'>
       <div className='flex justify-between text-white items-center align-middle max-md:pt-[0.8rem] md:pt-[0.5rem]'>
       <div className=' flex  gap-2 justify-center items-center '>
            <img src={require('../Assets/kogo.png')} className='md:w-[5rem] max-md:w-[4rem]' alt="" />
            <h1 className='md:text-[30px] max-md:text-[15px] max-md:leading-[17px] font-bold text-orange-400  md:leading-[30px] uppercase'>Sri Ganesh<br/> <span  className='md:text-[20px] max-md:text-[12px] md:leading-[20px] text-white'>Tours & Travels </span></h1>
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
            <a href='tel:98456 01599' className='border-0 max-md:text-[12px] px-[1rem] rounded-l-full py-1 rounded-r-full text-white bg-orange-400'>+91 98456 01599</a>
        </div>
      </div>
      </div>
     
    </div>
  )
}
