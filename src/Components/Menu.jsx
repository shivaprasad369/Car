import React from 'react'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='flex px-[5%] bg-[#444444f8] py-[2rem] text-white'>
      <div className='md:flex max-md:flex-col justify-between items-center '>
        <div className='flex lg:w-[30%] md:w-[40%] flex-col gap-3'>
            <h1 className='text-[30px] uppercase font-bold text-orange-400 tracking-wider'>Let's Talk</h1>
            <p>Starting a car rental company involves thorough market research to identify target customers and competitors. Key steps include acquiring a diverse fleet of vehicles, obtaining necessary licenses and insurance, and setting up an efficient booking system.</p>
            <button className='text-white w-fit mt-4 bg-orange-400 px-4 py-2 font-bold'><a href='#filter'>Tell us about your next trip</a></button>
        </div>
        <div className='md:w-[40%] max-md:text-center mt-[2rem]'>
            <div className='flex flex-col gap-3 '>
               <div className='flex gap-16'>
                <h3 className='flex gap-10 font-bold'>Email</h3><span className='hover:text-orange-400 cursor-pointer transition-all'>yourEmail@gmail.com</span>
                </div> 
                <div className='flex gap-14'>
                {/* <h3 className='flex gap-10'>Email</h3><span>yourEmail@gmail.com</span> */}
                <h3 className='font-bold'>Phone</h3><span className='hover:text-orange-400 transition-all cursor-pointer'>+91 836 225 1917</span>
                </div> 
                <div className='flex gap-10'>
                {/* <h3 className='flex gap-10'>Email</h3><span>yourEmail@gmail.com</span> */}
                <h3 className='font-bold'>Address</h3> <span className='hover:text-orange-400 transition-all cursor-pointer'>Chennamma Circle, Mahaveer Complex, Sadashiv Nagar, Hubballi, Karnataka 580029</span>
                </div> 
                <h3 className='md:ml-[7rem] max-md:ml-[3rem]'><Link to='/t&c' className='hover:text-orange-400 transition-all'>Terms and Conditions</Link></h3>
            </div>
            <div className='flex gap-6 justify-center items-center mt-[2rem] text-[2rem]'>
                <a href="https://www.instagram.com/ganesh_tourist/"><FaInstagram  className='hover:text-orange-400 transition-all'/></a>
                <a href="https://www.facebook.com/p/Shri-Ganesh-Tours-Travels-100063623571225/"> <FaFacebookSquare className='hover:text-orange-400 transition-all'/></a>
                <a href="https://www.youtube.com/watch?v=ME9z2ICuW1M"><FaYoutube className='hover:text-orange-400 transition-all'/>
</a>
<a href="https://x.com/i/flow/login?redirect_after_login=%2FHubballiTravels"><FaXTwitter className='hover:text-orange-400 transition-all'/></a>
            </div>
        </div>
      </div>
    </div>
  )
}
