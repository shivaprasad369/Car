import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Navigate, useParams } from "react-router-dom";
import Header from "../Headers";
import data from "../constant/Cars";
import { RiBillFill } from "react-icons/ri";
import { FaAirFreshener, FaCircle, FaHourglassHalf, FaIdCardAlt } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import {
  MdAirlineSeatLegroomNormal,
  MdAirlineSeatReclineExtra,
} from "react-icons/md";

import { useSession } from "@clerk/clerk-react";
import Footer from "../Footer";
// import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button, Divider } from "@mui/material";
import Menu from "../Menu";

export default function Result({ datas }) {
 const pdfRef= useRef()
 const [loading,setLoading]=useState(true)
const [load,setLoad]= useState(false)
  const [details, setDetails] = useState({
    inclu: true,
    exclu: false,
    facility: false,
    tc: false,
  });
const [basic,setBasic] = useState({
  name:'',
  email:'',
  phone:''
})

const { Cid } = useParams();
const {session}=useSession()
const user=session?.user;

const cars = data.filter((data) => data.carId === Number(Cid));
console.log(cars);
const [value, setValue] = React.useState("");
  
const handleClick=async(e)=>{
  setLoad(true)
  e.preventDefault();
  // await resend.emails.send({
  //   from: 'shivu2468sapare@gmail.com',
  //   to: 'shivu2468sapare@mail.com',
  //   subject: 'hello world',
  //   react: <h1>Hello world</h1>,
  // });
    // const d=resend.emails.send(config)
    // console.log(ds)
const info={
  Name:basic.name,
  Email:basic.email,
  Phone:value,
  PickUp:datas?.PickUp,
  ReturnAt:datas?.ReturnAt,
  PickUpAt:datas?.PickUpAt,
  From:datas?.From,
  To:datas?.TO,
  Type:datas?.Type,
  Car:cars[0]?.name
}
console.log(info)
const res=await fetch('https://carsbackend-3oe0.onrender.com/api/v1/post',
{
  method:'POST',
  body:JSON.stringify(info),
  headers:{
    'Content-Type':'application/json'
  }
}
)
setLoad(false)
setLoading(false)
  //  const res= await axios.post('http://localhost:8080/api/v1/post/',{
  //   Name:basic.name,
  //   Email:basic.email,
  //   Phone:value,
  //   PickUp:datas?.PickUp,
  //   ReturnAt:datas?.ReturnAt,
  //   PickUpAt:datas?.PickUpAt,
  //   From:datas?.From,
  //   To:datas?.TO,
  //   Type:datas?.Type,
  //   Car:cars[0]?.name
  // })
   if(res.ok){
    alert('Thank you')
   }else{
    alert('error')
   }

 
}

useEffect(()=>{

})
const downloadPdf=()=>{
  const input =pdfRef.current;
  html2canvas(input).then((canvas)=>{
    const imgData=canvas.toDataURL('image/png');
    const pdf=new jsPDF('p','mm','a4',true);
    const pdfWidth=pdf.internal.pageSize.getWidth();
    const pdfHeight=pdf.internal.pageSize.getHeight();
    const imgWidth=canvas.width;
    const imgHeight=canvas.height;
    const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
    const imgX=(pdfWidth-imgWidth*ratio)/2;
    const imgY=30;
    pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio)
    pdf.save('SGT.pdf')
  })
}
  return (
    <div className="w-[100%] ">
      {datas.From === "" && <Navigate to="/" />}
      <Header />
      <div  className="lg:flex  mb-[2rem] max-lg:flex-col pt-[3rem] gap-5 w-[100vw] justify-center items-center">
        <div className="flex flex-col  justify-center  bg-slate-200  max-lg:mx-[5%] max-md:mx-[3%] lg:w-[50%] py-[2rem] px-[1rem]  mt-[3rem]  rounded-md gap-3 items-center">
          <h1 className=" tracking-wide font-bold text-[22px]  leading-[35px] uppercase">
            Contact & Pickup detail
          </h1>
          <div className="border-b-[2px] border-orange-400 w-[80%] mb-4" />
          <form  action="" className="flex flex-col gap-5">
            <div className="flex max-lg:flex-col lg:gap-10 max-lg:gap-2 w-[100%]">
              <label htmlFor="name" className="text-[18px] font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={(e)=>setBasic({...basic,[e.target.name]:e.target.value})}
                defaultValue={user ? `${user.fullName}` : basic.name}
                id="name"
                className="outline-none w-[100%] border-b-[2px] border-gray-300  bg-slate-100 px-2 py-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex max-md:flex-col lg:gap-10 max-lg:gap-2 w-[100%]">
              <label htmlFor="email" className="text-[18px]  pr-1 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e)=>setBasic({...basic,[e.target.name]:e.target.value})}
                defaultValue={user ? 
                  user.emailAddresses[0].emailAddress
                  :basic.email}
                placeholder="Enter your email"
                className="outline-none border-b-[2px] w-[100%] border-gray-300  bg-slate-100 px-2 py-2"
              required
              />
            </div>
            <div className="flex max-md:flex-col lg:gap-10 max-lg:gap-2 w-[100%]">
              <label className="text-[18px]   font-bold">Mobile</label>
              <PhoneInput
                // onChange={(e)=>setBasic({...basic,phone:e.target.value})}
                defaultValue={
                 user? user.phoneNumbers[0].phoneNumber:value
                }
                placeholder={"Enter Mobile Number"}
                name='phone'
                onChange={setValue}
                className="flex  border-b-[2px]  border-gray-300 bg-slate-100 px-2 py-2 outline-none"
              required
              />
            </div>
            <div className="lg:flex max-lg:flex-col lg:gap-10 max-lg:gap-2">
              <label htmlFor="pick up" className="text-[18px]   font-bold">
                Pick up
              </label>
              <input
                type="address"
                name="Pick up"
                id="pick up"
                defaultValue={datas.From}
                className="flex  ml-[px] w-[100%] border-b-[2px]  border-gray-300 bg-slate-100 px-2 py-2 outline-none"
                placeholder="Enter your Pickup address"
              required
              />
            </div>
            <div className="lg:flex max-lg:flex-col lg:gap-10 max-lg:gap-2">
              <label htmlFor="Drop" className="text-[18px]   font-bold">
                Drop
              </label>
              <input
                type="text"
                name="drop"
             defaultValue={datas.TO}
                id="drop"
                className="flex  ml-[7px] w-[100%] border-b-[2px]  border-gray-300 bg-slate-100 px-2 py-2 outline-none"
                placeholder="Enter your drop address"
              required
              />
            </div>
            <button onClick={handleClick} className={` bg-orange-400 px-[1rem] py-2 text-xl text-white font-bold`}>
              {load ? 'Loading..':'Book now'}
            </button>
          </form>
        </div>
        <div className="lg:w-[40%] max-lg:mx-[3%] pt-[3rem] flex flex-col gap-5 justify-center items-center">
          <div className="border-[2px] border-orange-400 rounded-md w-[100%] items-center ">
            <div className="text-center bg-orange-400 text-white font-bold text-lg py-1">
              <h4>YOUR BOOKING DETAILS</h4>
            </div>
            <div className="flex capitalize flex-col gap-3 justify-center  py-[1rem] items-centerw-[100%] px-[10%]">
              <div className="flex  text-[18px] font-bold">
                <span>Direction :</span>
                <span className="font-normal ml-[30%] text-[16px] text-gray-500 ">
                  {datas?.From} &gt; {datas?.TO}{" "}
                </span>
              </div>
              <div className="flex text-[18px] font-bold">
                <span>Pickup Date</span>
                <span className="font-normal  ml-[30%]  text-[16px] text-gray-500 ">
                  {datas?.PickUp}{" "}
                </span>
              </div>
              <div className="flex text-[18px] font-bold">
                <span>Trip Type</span>
                <span className="font-normal  ml-[30%]  text-[16px] text-gray-500 ">
                  {cars[0]?.type}
                </span>
              </div>
              <div className="flex text-[18px] font-bold">
                <span>car name</span>
                <span className="font-normal  ml-[30%]  text-[16px] text-gray-500 ">
                  {cars[0]?.name}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="border-[2px] border-orange-400 rounded-md w-[100%] items-center ">
            <div className="text-center flex justify-around  text-black font-bold mt-[-4px] uppercase text-md py-1">
              <button
                onClick={() =>
                  setDetails({
                    inclu: true,
                    exclu: false,
                    facility: false,
                    tc: false,
                  })
                }
                className={`${
                  details.inclu && "bg-orange-400 text-white font-bold"
                }  w-[25%] py-2 uppercase`}
              >
                Inclusive
              </button>
              <button
                onClick={() =>
                  setDetails({
                    inclu: false,
                    exclu: true,
                    facility: false,
                    tc: false,
                  })
                }
                className={`${
                  details.exclu && "bg-orange-400 text-white font-bold"
                } ${
                  cars[0]?.type === "Airport" && "hidden"
                } w-[25%] py-2 uppercase`}
              >
                Exclusive
              </button>
              <button
                onClick={() =>
                  setDetails({
                    inclu: false,
                    exclu: false,
                    facility: true,
                    tc: false,
                  })
                }
                className={`${
                  details.facility && "bg-orange-400 text-white font-bold"
                }  w-[25%] py-2 uppercase`}
              >
                Facilites
              </button>
              <button
                onClick={() =>
                  setDetails({
                    inclu: false,
                    exclu: false,
                    facility: false,
                    tc: true,
                  })
                }
                className={`${
                  details.tc && "bg-orange-400 text-white font-bold"
                }  w-[25%] py-2 uppercase`}
              >
                T&C
              </button>
            </div>
            <div className="flex capitalize flex-col gap-3 justify-center  py-[1rem] items-centerw-[100%] px-[10%]">
              {details?.inclu && (
                <>
                  <div className="flex  text-[18px]  items-center gap-10 font-bold">
                    <span>
                      <RiBillFill />
                    </span>
                    <span className="font-normal  text-[16px] text-gray-500 ">
                      GST (5%)
                    </span>
                  </div>
                  <div className="flex text-[18px] items-center gap-10 font-bold">
                    <span>
                      <FaIdCardAlt />
                    </span>
                    <span className="font-normal   text-[16px] text-gray-500 ">
                      Driver Allowance
                    </span>
                  </div>
                </>
              )}

              {details?.exclu && cars[0]?.type !== "Airport" && (
                <>
                  {cars[0].type === "Local" && (
                    <div className="flex flex-col gap-3">
                      <div className="flex  text-[18px]  items-center gap-10 font-bold">
                        <span>
                          <FaHourglassHalf />
                        </span>
                        <span className="font-normal  text-[16px] text-gray-500 ">
                          {" "}
                          For extra Hour Rs.{cars[0].Exclusive.Hour}
                        </span>
                      </div>
                      <div className="flex  text-[18px]  items-center gap-10 font-bold">
                        <span>
                          <GiPathDistance />
                        </span>
                        <span className="font-normal  text-[16px] text-gray-500 ">
                          Form extra km Rs.{cars[0].Exclusive.km}
                        </span>
                      </div>
                    </div>
                  )}
                  {cars[0].type === "Round" && (
                    <div className="flex flex-col gap-3">
                      <div className="flex  text-[18px]  items-center gap-10 font-bold">
                        <span>
                          <MdAirlineSeatReclineExtra />
                        </span>
                        <span className="font-normal  text-[16px] text-gray-500 ">
                          Driver Batta Rs.{cars[0].Exclusive.Batta}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}

              {details?.facility && (
                <>
                  <div className="flex flex-col gap-3">
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                        <FaAirFreshener />
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        {" "}
                        {cars[0]?.facilities.AC ? "A/C" : "----"}
                      </span>
                    </div>
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                        <MdAirlineSeatLegroomNormal />
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        Seats {cars[0].facilities.seats}
                      </span>
                    </div>
                  </div>
                </>
              )}

              
{details?.tc && (
                <>
                  <div className="flex flex-col gap-3">
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                      <FaCircle className='text-orange-400'/>
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        {" "}
                       Inter State road tax is applicable
                      </span>
                    </div>
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                      <FaCircle className='text-orange-400'/>
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        {" "}
                       GST will be charge total amount of 5% 
                      </span>
                    </div>
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                      <FaCircle className='text-orange-400'/>
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        {" "}
                       Parking and toll fees as applicable.
                      </span>
                    </div>
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                      <FaCircle className='text-orange-400'/>
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        {" "}
                       Night after 12.00AM Driver Batta one day extra.
                      </span>
                    </div>
                    <div className="flex  text-[18px]  items-center gap-10 font-bold">
                      <span>
                      <FaCircle className='text-orange-400'/>
                      </span>
                      <span className="font-normal  text-[16px] text-gray-500 ">
                        {" "}
                       Any Hike in fuel charges hire charges will change as per the ratio.
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Summery/> */}
      {!loading &&
      <div ref={pdfRef} className="md:px-[10%] max-md:px-[3%] h-[100%]  w-[100%] flex  flex-col justify-center items-center">
      <div className="flex flex-col gap-5  px-5 pb-[2rem]">
        <div className="text-[25px] flex flex-c0l gap-5 leading-[35px] font-bold text-orange-400 text-center justify-center items-center mt-[2rem] uppercase">your order Summary</div>
        <div className="mt-[2rem]  md:w-[40%]  font-bold tracking-wider flex flex-col ">
          <img
            src={require("../../Assets/kogo.png")}
            alt="order"
            className="w-[5rem] mb-4 "
          />
          <h1 className="uppercase">Shri ganesh travel.</h1>
          <p>yourEmail@gmail.com.</p>
          <p>+91 836 225 1917.</p>
          <p>
            Chennamma Circle, Mahaveer Complex, Sadashiv Nagar, Hubballi,
            Karnataka 580029.
          </p>
          {Date()}.
        </div>
        <Divider />
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-bold tracking-wider">Rental Details</h1>
          <div className="capitalize">
            <h1 >{basic.name}</h1>
            <h2>{basic.email}</h2>
            <h2>{value}</h2>
            <h1>Trip type: {datas?.Type}</h1>
            <h2>car name :{cars[0]?.name}</h2>
            <h2>From : {datas?.From}</h2>
            <h2>To : {datas?.TO}</h2>
            <h2>PickUp date : {datas?.PickUp}</h2>
            <h2>Pickup At: {datas?.PickUpAt}</h2>
            <h2>Return date: {datas?.ReturnAt} </h2>
          </div>
        </div>
        <Divider  className="my-2"/>
        <div className="">
          <h1 className="text-[20px] font-bold tracking-wider mb-2">Terms and Conditions</h1>
          <div className="flex flex-col gap-2">
            <span>1. Inter State Road Tax Is Applicable</span>
            <span>2. GST Will Be Charge Total Amount Of 5%</span>
            <span>3. Parking And Toll Fees As Applicable.</span>
            <span>4. Night After 12.00AM Driver Batta One Day Extra.</span>
            <span>
              5. Any Hike In Fuel Charges Hire Charges Will Change As Per The
              Ratio.
            </span>
          </div>
        </div>
<Divider/>
        <div>
        Thank you for choosing our car rental service! If you have any questions or need further assistance, please contact us at sgthubli@gmail.com or call us at +91 836 225 1917
        <h1><a href="http://localhost:2525/t&c">Terms and Conditions :http://localhost:2525/t&c</a></h1>
        </div>
      </div>
    </div>}
     {!loading && <div className="flex justify-center items-center my-[2rem]">
        <Button  sx={{fontWeight:600,background:'orange'}} onClick={downloadPdf} className="font-bold text-white bg-orange-400">Download</Button>
      </div>}
      <Menu/>
      <Footer/>
    </div>
  );
}
