import React, { useState } from "react";
import data from "./constant/Place.jsx";

import { Link } from "react-router-dom";

export default function Nearest({  setData }) {
  console.log(data);
  const [days, setDays] = useState({
    one: true,
    two: false,
  });
  // const submitHandler = (To) => {
  //   setData({
  //     From: "Hubli",
  //     TO: To,
  //   });
  // };
  let day = days.one ? Number(1) : Number(2);
  console.log(days.one ? Number(1) : Number(2));
  const datas = data.filter((data) => data.day === day);
  return (
    <div id="near" className="flex flex-col relative mt-[3rem] w-[100vw] justify-center items-center overflow-hidden h-[100%]">
      <div>
        <h1 className="text-center leading-[35px] mb-[2rem] text-[25px] text-orange-400 font-bold uppercase tracking-wider">
          Nearest place from hubli
        </h1>
        <div className="flex justify-center gap-10 items-center mt-4 flex-col w-[100vw] ">
          <div className="flex gap-4">
            <button
              onClick={() => setDays({ one: true, two: false })}
              className={`${
                days.one ? "bg-orange-400 text-white" : "text-black"
              } w-[8rem]  py-2 font-bold`}
            >
              One day Trips
            </button>
            <button
              onClick={() => setDays({ one: false, two: true })}
              className={`${
                days.two ? "bg-orange-400 text-white" : "text-black"
              } w-[8rem]  py-2 font-bold`}
            >
              Two days Trips
            </button>
          </div>
          {datas?.map((data, index) => (
            <div className="lg:flex max-mg:flex-col gap-10 lg:w-[80%] px-[5%]     justify-center ">
              <div className="relative lg:w-[60%] justify-center items-center ">
                <img
                  src={require(`../Assets/Places/` + data?.Image)}
                  alt=""
                  className="w-[100%] h-[100%] object-cover"
                />
                <div className="absolute bottom-0 w-[100%] h-[3rem] bg-[#1f1c1c5d] ">
                  <div className="h-[100%] lg:w-[40%]  text-white bg-[#d88435c0] font-bold capitalize flex justify-center items-center">
                    about {data?.name}
                  </div>
                </div>
              </div>
              <div className="lg:w-[40%] max-lg:mt-[2rem] flex flex-col gap-2">
                <h3 className="text-[22px] uppercase font-bold mb-4 text-orange-400 tracking-wider">
                  {data?.name}
                </h3>
                <div className="flex flex-col gap-2">
                  <h3>
                    <span className="font-bold tracking-wider">
                      Distance from Hubli :
                    </span>{" "}
                    <span>{data?.distance}</span>
                  </h3>
                  <h3>
                    <span className="font-bold tracking-wider">
                      Best time to visit:
                    </span>{" "}
                    <span>{data?.time}</span>{" "}
                  </h3>
                  <h3>
                    <span className="font-bold tracking-wider">Duration: </span>{" "}
                    <span>{data?.day} day</span>{" "}
                  </h3>
                  <h3 className="flex flex-wrap ">
                    <span className="font-bold tracking-wider">
                      Type of Destination:
                    </span>{" "}
                    <span className="flex flex-wrap gap-3">
                      <h5>{data?.destination[1]}</h5>{" "}
                      <h5>{data?.destination[2]}</h5>
                      <h5>{data?.destination[3]}</h5>
                    </span>
                  </h3>
                </div>
                <div>
                  <p>
                    {data?.detail}<br />
                   {data?.imges && 
                    <Link
                      to={`/location/${data?.id}`}
                      className="underline text-blue-500 text-sm font-bold hover:text-orange-400 transition-all tracking-wider"
                    >
                      Continue Reading
                    </Link>}
                  </p>
                  {!data?.imges && (
                    <Link to="/search" className="mt-[1rem]">
                      <button
                        onClick={() => setData({From:'Hubli',TO:data?.name,Yype:'Local',PickUp:' ',PickUpAt:''})}
                        className="w-[7rem] py-2  font-bold text-white bg-orange-400"
                      >
                        Book Now
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
