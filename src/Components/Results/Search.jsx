import React, { useEffect, useState } from 'react'
import data from '../constant/Cars'
import { Link, Navigate, redirect } from 'react-router-dom'
import Header from '../Headers'
import Menu from '../Menu'
import Footer from '../Footer'
export default function Searchs({datas,setData}) {
  console.log(data)
  const [local,setLocal]=useState({
    l1:false,
    l2:true
  })
  console.log(datas)
  const dt =data.filter((data)=>data.type===datas.Type)
  function demo()
  {
  if(dt.length===0)
        {
       return redirect("/login");
    }
  }
  // eslint-disable-next-line
  useEffect(()=>{
demo()
// eslint-disable-next-line
},[dt])
console.log(datas)
  return (
    <>
    <Header/>


    <div className='flex flex-col px-[3%] w-[100vw] pt-[5.5rem]  items-center'>
    <div className='text-black flex gap-5 bg-gray-100 mb-[1rem] justify-between items-center font-bold w-[100vw] max-lg:px-[3%] lg:px-[10%]'>
        <div className='flex flex-col md:gap-5 gap-2 md:py-2 py-1'>
            <span className='md:text-[14px] max-md:text-xs text-gray-500 font-normal'>Home &gt; Select Car </span>
            <span className='max-md:text-xs'>{datas?.From} &gt; {datas?.TO}</span>
        </div>
        <div className='flex  md:gap-10 max-md:gap-2 py-2'>
            <div className='flex flex-col gap-1'>
                <span className='font-normal md:text-md max-md:text-xs tracking-wider leading-[20px]'>Pick Up</span>
            <span className='max-md:text-xs'>{datas?.PickUp ? datas?.PickUp : <input type='date' onChange={(e)=>setData((data)=>({...data,PickUp:e.target.value}))} className='outline-none bg-slate-200 px-2 py-1'/>} </span>

            </div>
            <div className='flex flex-col gap-1'>
                <span className='font-normal  md:text-md max-md:text-xs  tracking-wider leading-[20px]'>{datas.Type==='Airport'? 'Trip type':'Return At'}</span>
                <span className='max-md:text-xs'>{datas?.ReturnAt ? datas?.ReturnAt : "-- --" } </span>

            </div>
            <div className='flex flex-col gap-1'>
                <span className='font-normal  md:text-md max-md:text-xs  tracking-wider leading-[20px]'>Pick Up At</span>
                <span className='max-md:text-xs'>{datas?.PickUpAt? datas?.PickUpAt : <input type='time' onChange={(e)=>setData((data)=>({...data,PickUpAt:e.target.value}))} className='outline-none bg-slate-200 px-2 py-1'/>} </span>

            </div>
           
        </div>
    </div>
      {datas?.Type === 'Local'  &&  <div className='flex gap-2 justify-center items-center pb-[2rem]'>
        <button onClick={()=>setLocal({l1:true,l2:false})} className={`border-0 px-[1rem] py-2 ${local.l1 && 'bg-orange-400 text-white'} font-bold`}>4 hrs | 40 Km</button>  
        <button onClick={()=>setLocal({l1:false,l2:true})} className={`border-0 px-[1rem] py-2 ${local.l2 && 'bg-orange-400 text-white'}  font-bold`}>8 hrs | 80 Km</button>  

      </div>}
     { dt?.map((data)=><div className='flex max-lg:hidden justify-around w-[90%] mb-[0.5rem] gap-36 items-center border-[1px] border-orange-400 px-[2rem] py-1 rounded-xl'> 
      <div className='items-center flex gap-7 justify-center'>
        <img className='w-[10rem]' src={require('../../Assets/Local/'+data?.Photo)} alt="" />
      <div><h3 className='text-[24px] tracking-wide font-bold leading-[35px] '>{data?.name}</h3></div>
      </div>
<div className='flex gap-10 justify-start '>

   <div className={`text-[20px]  tracking-wide font-bold capitalize  flex flex-col ${data?.type==='Local' ?'block' : 'hidden'}`}>include {local.l1 ? '40km' : '80km'} <span className='text-[16px] leading-[20px] font-normal text-gray-600' >and {local.l1 ? '4' : '8'} hours</span></div> 
   <div className={`text-[20px] tracking-wide font-bold capitalize  flex flex-col ${data?.type==='Airport' ? 'block' : 'hidden'}`}>Airport/Station <span className='text-[16px] leading-[20px] font-normal text-gray-600' >Hubli city</span></div> 
      <div >
      <h3 className='text-orange-400 font-bold text-[24px]'><span className={`${data?.type==='Round' && 'hidden'}`}>RS.</span> {local.l1 ? data.price[0][4]['40km']: data?.price[0][8]['80km']}</h3>
      <span className='text-[16px] leading-[20px] font-normal text-gray-600'>include of GST</span>
      </div>
<button className='border-0 px-[1rem] py-1 h-[2rem] mt-[1rem] bg-orange-400 text-white font-bold uppercase tracking-wider' ><Link to={'/search/'+data?.carId}>Select</Link></button>
</div>
      </div>)}

      { dt?.map((data)=><div className='flex flex-row-reverse gap-5 lg:hidden justify-between w-[95vw] mb-[0.5rem]  items-center border-[1px] border-orange-400 max-md:px-2 md:px-[2rem] py-1 rounded-xl'> 
      <div className='items-center w-[50vw] flex  justify-center'>
        <img className='w-[100%]' src={require('../../Assets/Local/'+data?.Photo)} alt="" />
     
      </div>
<div className='flex w-[40%] flex-col gap-1 py-3 '>
<div><h3 className='text-[24px] tracking-wide font-bold leading-[25px] '>{data?.name}</h3></div>
   <div className={`text-[20px] tracking-wide font-bold capitalize  flex flex-col ${data?.type==='Local' ?'block' : 'hidden'}`}>include {local.l1 ? '40km' : '80km'} <span className='text-[16px] leading-[20px] font-normal text-gray-600' >and {local.l1 ? '4' : '8'} hours</span></div> 
   <div className={`text-[20px] tracking-wide font-bold capitalize  flex flex-col ${data?.type==='Airport' ? 'block' : 'hidden'}`}>Airport/Station <span className='text-[16px] leading-[20px] font-normal text-gray-600' >Hubli city</span></div> 
      <div >
      <h3 className='text-orange-400 font-bold text-[24px]'><span className={`${data?.type==='Round' && 'hidden'}`}>RS.</span> {local.l1 ? data.price[0][4]['40km']: data?.price[0][8]['80km']}</h3>
      <span className='text-[16px] leading-[20px] font-normal text-gray-600'>include of GST</span>
      </div>
<button className='border-0 px-[1rem] py-2 bg-orange-400 text-white font-bold uppercase tracking-wider' ><Link to={'/search/'+data?.carId}>Select</Link></button>
</div>
      </div>)}

   {
    dt.length<=0 && 	
    <Navigate to="/"  />
   }
    </div>
    <Menu/>
    <Footer/>
    </>
  )
}
