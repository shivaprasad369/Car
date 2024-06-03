import React, { useState } from 'react'
import data from './constant/Cars'
export default function Search({datas}) {
  console.log(data)
  const [local,setLocal]=useState({
    l1:false,
    l2:true
  })
  console.log(datas)
  const dt =data.filter((data)=>data.type===datas.Type)
  return (
    <div className='flex flex-col px-[5%]   items-center'>
      {datas?.Type === 'Local'  && <div className='flex gap-2 justify-center items-center pb-[2rem]'>
        <button onClick={()=>setLocal({l1:true,l2:false})} className={`border-0 px-[1rem] py-2 ${local.l1 && 'bg-orange-400 text-white'} font-bold`}>4 hrs | 40 Km</button>  
        <button onClick={()=>setLocal({l1:false,l2:true})} className={`border-0 px-[1rem] py-2 ${local.l2 && 'bg-orange-400 text-white'}  font-bold`}>8 hrs | 80 Km</button>  

      </div>}
     {dt?.map((data)=><div className='flex justify-around w-[100%] mb-[0.5rem] gap-36 items-center border-[1px] border-orange-400 px-[2rem] py-1 rounded-xl'> 
      <div className='items-center flex gap-7 justify-center'>
        <img className='w-[10rem]' src={require('../Assets/Local/Innova.png')} alt="" />
      <div><h3 className='text-[24px] tracking-wide font-bold leading-[35px] '>{data?.name}</h3></div>
      </div>
<div className='flex gap-20 justify-center items-center'>

   <div className={`text-[20px] tracking-wide font-bold capitalize  flex flex-col ${data?.type==='Local' ?'block' : 'hidden'}`}>include {local.l1 ? '40km' : '80km'} <span className='text-[16px] leading-[20px] font-normal text-gray-600' >and {local.l1 ? '4' : '8'} hours</span></div> 
   <div className={`text-[20px] tracking-wide font-bold capitalize  flex flex-col ${data?.type==='Airport' ? 'block' : 'hidden'}`}>Airport/Station <span className='text-[16px] leading-[20px] font-normal text-gray-600' >Hubli city</span></div> 
      <div >
      <h3 className='text-orange-400 font-bold text-[24px]'><span className={`${data?.type==='Round' && 'hidden'}`}>RS.</span> {local.l1 ? data.price[0][4]['40km']: data?.price[0][8]['80km']}</h3>
      <span className='text-[16px] leading-[20px] font-normal text-gray-600'>include of GST</span>
      </div>
<button className='border-0 px-[1rem] py-2 bg-orange-400 text-white font-bold uppercase tracking-wider' >Select</button>
</div>
      </div>)}
    </div>
  )
}
