import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from 'react';


export default function Filter({data,setData}) {
    const [form,setForm]=useState({
        out:false,
        local:true,
        airport:false,
        round:false,
    
    })
  
   

    const submitHandle=(e)=>{
e.preventDefault();
 console.log(data)
    }


    const location = useLocation();
    const pathname = location.pathname;
    console.log(data)
    useEffect(() => {
      // Refresh data here
     setData('')
    //  const element = document.getElementById("filter");
    //  if (element) {
    //    element.scrollIntoView({ behavior: "smooth" });
    //  }
      // Call your API or fetch data here
      // eslint-disable-next-line
    }, [pathname,location]);

  return (
    <div  className="flex justify-center w-[100vw] items-center z-40">
      <div 
        style={{ zIndex: "inherit" }}
        className="xl:w-[90%] max-xl:w-[100vw] max-lg:px-[2%] flex justify-center mt-[-4rem]  items-center  bg-white shadow-md px-[1rem] pb-[3rem] rounded-lg"
      >
        <div  className="flex gap-5 justify-center items-center flex-col" style={{ zIndex: "inherit" }}>
            <div className="flex mx-[3%] justify-center  mt-[1rem] max-lg:h-[4rem] mb-[2rem] rounded-xl w-fit border-2 items-center ">
                {/* <div className="border-r-2 border-white py-2 bg-orange-400 text-white px-[1rem]">
                    <button onClick={()=>setForm({out:true,round:false,local:false,airport:false})}>Out Station</button>
                </div> */}
                <div className={` border-r-2 max-lg:pt-[0.3rem] py-2 h-[100%] rounded-l-xl ${form.round ? 'bg-orange-400 text-white' : ' text-black' }  px-[1rem]`}>
                    <button onClick={()=>setForm({out:false,round:true,local:false,airport:false})}>Out Station</button>
                </div>
                <div className={` items-center max-lg:pt-[1rem] py-2 border-r-2 h-[100%]  ${form.local ? 'bg-orange-400 text-white' : ' text-black' } px-[1rem]`}>
                    <button onClick={()=>setForm({out:false,round:false,local:true,airport:false})}>Local</button>
                </div>
                <div className={` items-center  border-r-2 lg:py-2 h-[100%] rounded-r-xl ${form.airport ? 'bg-orange-400 text-white' : ' text-black' } px-[1rem]`}>
                    <button  onClick={()=>setForm({out:false,round:false,local:false,airport:true})}>Airport/Station.(Hubli)</button>
                </div>
            </div>
         {form.out  && <form action=""  onSubmit={submitHandle} className="lg:flex max-lg:flex-col gap-5">
            <input
            type="text"
              name="from"
              id=""
              placeholder="From"
              onChange={(e)=>setData((data)=>({...data,From:e.target.value,Type:'Out Station'}))}
              className="w-[30%] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
           />
              <input
            type="text"
              name="to"
              id=""
              placeholder="To"
              onChange={(e)=>setData((data)=>({...data,To:e.target.value,ReturnAt:''}))}
              className="w-[30%] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
           />
           <div className="flex mt-[-1.4rem] flex-col w-[30%]">
            <label htmlFor=" " className="font-bold">Pick Up</label>
            <input
              type="date"
              placeholder="pickUp"
              onChange={(e)=>setData((data)=>({...data,PickUp:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
            <div className="flex mt-[-1.4rem] flex-col w-[30%]">
            <label htmlFor="" className="font-bold">Pick Up At</label>
            <input
              type="time"
              placeholder="Pick Up At"
              onChange={(e)=>setData((data)=>({...data,PickUpAt:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
           
            <button className="border-0 w-[20%] h-[2rem] mt-[0.5rem]  bg-orange-400 text-[15px] font-bold text-white">
              <Link to={'/search'}>Find cars </Link>
            </button>
          </form>}
          {form.round  && <form action="" onSubmit={submitHandle}  className="lg:flex max-lg:flex-col max-lg:w-[100vw] gap-5">
          <div className="flex  lg:mt-[-1.4rem] flex-col px-2 lg:w-[30%] max-lg:w-[100%] ">
            <label htmlFor=" " className="font-bold ">From</label>
            <input
            type="text"
              name="from"
              id=""
            
              placeholder="From"
           
              onChange={(e)=>setData((data)=>({...data,From:e.target.value,Type:'Round'}))}
              className="lg:w-[100%] max-lg:w-[100%]   px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
           />
           </div><br className="lg:hidden"/>
           <div className="flex lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[100%] px-2">
            <label htmlFor=" " className="font-bold">To</label>
              <input
            type="text"
              name="to"
              id=""
              placeholder="To"
       
            
              onChange={(e)=>setData((data)=>({...data,TO:e.target.value}))}
              className="lg:w-[100%] max-lg:w-[100%]  max-lg:mb-[15px] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
           />
           </div>
           <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor=" " className="font-bold">Pick Up</label>
            <input
              type="date"
              placeholder="PickUp"
              onChange={(e)=>setData((data)=>({...data,PickUp:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
            <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor=" " className="font-bold">Return At</label>
            <input
              type="date"
              placeholder="Return At"
              onChange={(e)=>setData((data)=>({...data,ReturnAt:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
            <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor="" className="font-bold">Pick Up At</label>
            <input
              type="time"
              placeholder="Pick Up At"
              onChange={(e)=>setData((data)=>({...data,PickUpAt:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
           
            <button className="border-0 lg:w-[20%] w-[30%] rounded-md max-lg:ml-[2.5vw] lg:h-[2rem] max-lg:h-[2.5rem] mt-[0.5rem]  bg-orange-400 lg:text-[15px] text-[18px] font-bold text-white">
            <Link to={'/search'} >Find cars </Link>
            </button>
          </form>}
          {form.local && <form action="" onSubmit={submitHandle}  className="lg:flex max-lg:flex-col max-lg:w-[100vw] gap-5">
          <div className="flex max-lg:mb-[0px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor=" " className="font-bold">From</label>
            <input
            type="text"
              name="from"
              
              id=""
             
              placeholder="From"
              onChange={(e)=>setData((data)=>({...data,From:e.target.value,ReturnAt:''}))}
              className="lg:w-[100%] max-lg:w-[100%] max-lg:mb-[px] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
              />
              </div><br className="lg:hidden"/>
              <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] px-2 flex-col lg:w-[30%] max-lg:w-[100%] ">
            <label htmlFor=" " className="font-bold">To</label>
              <input
            type="text"
              name="to"
              id=""
            
              
              placeholder="To"
              onChange={(e)=>setData((data)=>({...data,TO:e.target.value,Type:'Local'}))}
              className="lg:w-[100%] max-lg:w-[100%] max-lg:mb-[px] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
           />
           </div>
           <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor=" " className="font-bold">Pick Up</label>
            <input
              type="date"
              placeholder="PickUp"
              onChange={(e)=>setData((data)=>({...data,PickUp:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
            
            <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor="" className="font-bold">Pick Up At</label>
            <input
              type="time"
              placeholder="Pick Up At"
              onChange={(e)=>setData((data)=>({...data,PickUpAt:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
           
            <button className="border-0 lg:w-[20%] w-[30%] rounded-md max-lg:ml-[2.5vw] lg:h-[2rem] max-lg:h-[2.5rem] mt-[0.5rem]  bg-orange-400 lg:text-[15px] text-[18px] font-bold text-white">
            <Link to={'/search'}>Find cars </Link>
            </button>
          </form>}
          {form.airport  && <form action="" onSubmit={submitHandle}   className="lg:flex max-lg:flex-col max-lg:w-[100vw] gap-5">
           <select   onChange={(e)=>setData((data)=>({...data,ReturnAt:e.target.value}))}    className="lg:w-[30%] max-lg:w-[95vw] max-lg:ml-[2.5vw] max-lg:mb-[15px] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100">
            <option value="Pickup from airport">Pickup from airport</option>
            <option value="Drop to airport">Drop to airport</option>
           </select>
            <input
            type="text"
              name="from"
              id=""
              placeholder="From"
              onChange={(e)=>setData((data)=>({...data,From:e.target.value,Type:'Airport'}))}
              className="lg:w-[30%] max-lg:w-[95vw] max-lg:ml-[2.5vw] max-lg:mb-[15px] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
              /><br className="lg:hidden"/>
              <input
            type="text"
              name="to"
              id=""
              placeholder="To"
              onChange={(e)=>setData((data)=>({...data,TO:e.target.value}))}
              className="lg:w-[30%] max-lg:w-[95vw] max-lg:ml-[2.5vw] max-lg:mb-[15px] px-2 rounded-md h-[3rem] border-[1px] outline-none bg-slate-100"
           />
          <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor=" " className="font-bold">Pick Up</label>
            <input
              type="date"
              placeholder="PickUp"
              onChange={(e)=>setData((data)=>({...data,PickUp:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
            {/* <div className="flex mt-[-1.4rem] flex-col w-[30%]">
            <label htmlFor=" " className="font-bold">Return At</label>
            <input
              type="date"
              placeholder="Return At"
              onChange={(e)=>setData((data)=>({...data,ReturnAt:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div> */}
            <div className="flex max-lg:mb-[15px] lg:mt-[-1.4rem] flex-col lg:w-[30%] max-lg:w-[95vw] max-xl:ml-[2.5vw]">
            <label htmlFor="" className="font-bold">Pick Up At</label>
            <input
              type="time"
              placeholder="Pick Up At"
              onChange={(e)=>setData((data)=>({...data,PickUpAt:e.target.value}))}
              className="w-[100%] px-2 rounded-md  h-[3rem] border-[1px] outline-none bg-slate-100"
            />
            </div>
           
            <button className="border-0 lg:w-[20%] w-[30%] rounded-md max-lg:ml-[2.5vw] lg:h-[2rem] max-lg:h-[2.5rem] mt-[0.5rem]  bg-orange-400 lg:text-[15px] text-[18px] font-bold text-white">
            <Link to={'/search'}>Find cars </Link>
            </button>
          </form>}
        </div>
      </div>
    </div>
  );
}
