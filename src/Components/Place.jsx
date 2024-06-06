import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './constant/Place'
import Footer from './Footer'
import Header from './Header'
export default function Place({datas,setData}) {
    const {id}=useParams()
    const dt=data.filter((data)=>data.id===Number(id))
    console.log(dt)
    // const submitHandler=()=>{
    //     setData({
    //         From:'Hubli',
    //         TO:dt[0]?.name,
    //     })
    // }
  return (
    <div>
        <Header/>
    <div className='md:px-[10%] max-md:px-[3%] pt-[5rem] flex flex-col justify-center items-center '>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col text-center text-[22px] leading-[35px] gap-3 uppercase mt-[2rem] font-bold text-orange-400 tracking-wider'>
                <h2>{dt[0]?.name}</h2>
                <img src={require('../Assets/Places/'+dt[0]?.Image)} alt="" />
            </div>
            <div className='flex flex-col gap-4 text-[18px] tracking-wider'>
                <p>{dt[0].detail}</p>
                <p>{dt[0].detail1}</p>
            </div>
        </div>
   <h2 className='mt-[2rem] text-[22px] leading-[35px] font-bold text-orange-400 tracking-wider mb-[2rem] uppercase'>Related Images</h2>
   <div className='flex flex-wrap gap-5'>
    {dt[0]?.imges.map((data)=>(
        <img src={require('../Assets/loaction/'+data)} alt="related" className='md:w-[20rem] ' />
    ))} 

   </div>
   <Link to="/search" className="mt-[2rem] mb-[2rem]">
                      <button
                        onClick={() => setData({From:'Hubli',TO:dt[0]?.name,Type:'Local',PickUp:'',PickUpAt:''})}
                        className="w-[7rem] py-2  font-bold text-white bg-orange-400"
                      >
                        Book Now
                      </button>
                      </Link>
    </div>
    <Footer/>
    </div>
  )
}
