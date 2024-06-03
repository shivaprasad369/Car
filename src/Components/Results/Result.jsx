import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Navigate, useParams } from "react-router-dom";
import Header from "../Header";
import data from "../constant/Cars";
import { RiBillFill } from "react-icons/ri";
import { FaAirFreshener, FaCircle, FaHourglassHalf, FaIdCardAlt } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import {
  MdAirlineSeatLegroomNormal,
  MdAirlineSeatReclineExtra,
} from "react-icons/md";
import { useSession } from "@clerk/clerk-react";

export default function Result({ datas }) {
  const [details, setDetails] = useState({
    inclu: true,
    exclu: false,
    facility: false,
    tc: false,
  });
  const { Cid } = useParams();
 const {session}=useSession()
 const user=session?.user;

  const cars = data.filter((data) => data.carId === Number(Cid));
  console.log(cars);
  const [value, setValue] = React.useState("");

  return (
    <div className="w-[100%] ">
      {datas.From === "" && <Navigate to="/" />}
      <Header />
      <div className="lg:flex max-lg:flex-col pt-[3rem] gap-5 w-[100vw] justify-center items-center">
        <div className="flex flex-col justify-center  bg-slate-200  max-lg:mx-[5%] max-md:mx-[3%] lg:w-[50%] py-[2rem] px-[1rem]  mt-[3rem]  rounded-md gap-3 items-center">
          <h1 className=" tracking-wide font-bold text-[22px]  leading-[35px] uppercase">
            Contact & Pickup detail
          </h1>
          <div className="border-b-[2px] border-orange-400 w-[80%] mb-4" />
          <form action="" className="flex flex-col gap-5">
            <div className="flex max-lg:flex-col lg:gap-10 max-lg:gap-2 w-[100%]">
              <label htmlFor="name" className="text-[18px] font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user ? `${user.fullName}` :''}
                id="name"
                className="outline-none border-b-[2px] border-gray-300  bg-slate-100 px-2 py-2"
                placeholder="Enter your name"
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
                value={user ? 
                  user.emailAddresses[0].emailAddress
                  :''}
                placeholder="Enter your email"
                className="outline-none border-b-[2px]  border-gray-300  bg-slate-100 px-2 py-2"
              />
            </div>
            <div className="flex max-md:flex-col lg:gap-10 max-lg:gap-2 w-[100%]">
              <label className="text-[18px]   font-bold">Mobile</label>
              <PhoneInput
                value={
                 user? user.phoneNumbers[0].phoneNumber:value}
                placeholder={"Enter Mobile Number"}
                onChange={setValue}
                className="flex  border-b-[2px]  border-gray-300 bg-slate-100 px-2 py-2 outline-none"
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
                className="flex  ml-[px] w-[100%] border-b-[2px]  border-gray-300 bg-slate-100 px-2 py-2 outline-none"
                placeholder="Enter your Pickup address"
              />
            </div>
            <div className="lg:flex max-lg:flex-col lg:gap-10 max-lg:gap-2">
              <label htmlFor="Drop" className="text-[18px]   font-bold">
                Drop
              </label>
              <input
                type="text"
                name="drop"
                id="drop"
                className="flex  ml-[7px] w-[100%] border-b-[2px]  border-gray-300 bg-slate-100 px-2 py-2 outline-none"
                placeholder="Enter your drop address"
              />
            </div>
            <button className="bg-orange-400 px-[1rem] py-2 text-xl text-white font-bold">
              Book now
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
    </div>
  );
}
