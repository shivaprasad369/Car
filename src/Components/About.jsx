import { Button } from "@mui/material";
import React from "react";
import { FaCheck, FaPlay } from "react-icons/fa";
import AlertDialog from "./Model";

export default function About() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div id="about" className="xl:px-[10%] max-xl:px-[3%] py-[4rem] flex  items-center w-[100vw] overflow-hidden">
      <div className="lg:flex max-lg:flex-col justify-center items-center w-[100%]">
        <div className="lg:w-[50%] w-[100%] lg:hidden mb-[15px] relative  rounded-xl">
          {/* <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute top-0-0 z-30 w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg> */}
          <img
            src={require("../Assets/WhatsApp Image 2024-05-28 at 3.16.46 PM.jpeg")}
            alt=""
            className="rounded-xl relative"
          />
          <div className="absolute justify-center items-center   flex  top-0 w-full h-full">
          <Button  onClick={handleClickOpen}>
            <span className="border-0 rounded-full w-[3rem] h-[3rem] pt-[0.9rem] bg-orange-400 pl-[1rem]">
            {/* <Button  onClick={handleClickOpen}> */}
              <FaPlay className="text-xl text-white  " />
            </span>
            </Button>
          </div>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <div className="text-[15px] lg:leading-[15px] text-orange-400 font-[500] mb-[15px] tracking-[2px]">
            Shri Ganesh Travels
          </div>
          <div className="md:text-[35px] text-[30px] mb-[15px] font-[700] max-lg:mt-[-1rem] leading-[1.25em]  ">
            We Are More Than <br />
            <span className="text-orange-400">A Car Rental Company</span>
          </div>
          <p className="mb-[30px] text-[15px] leading-[1.95em] font-[400]  w-[90%]">
            Founded in 1996 by Mr. Mahesh and Mr. Prakash, Ganesh Travels began
            with just two vehicles and has since expanded to a robust fleet of
            over 100. Catering to individuals, families, business travelers, and
            large groups across Karnataka and neighboring states, our services
            are tailored to meet the diverse needs of all our clients with
            excellence and precision.
          </p>
          <div className="mt-[1rem] flex  flex-col gap-1">
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm border-2 w-[2rem] h-[2rem] text-center align-middle items-center bg-gray-700 pt-[0.45rem] pl-[0.45rem] rounded-full">
                <FaCheck className="items-center flex text-center " />
              </span>{" "}
              <h4 className="text-[18px] font-semibold leading-[30px]">
                Luxury Cars
              </h4>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm border-2 w-[2rem] h-[2rem] text-center align-middle items-center bg-gray-700 pt-[0.45rem] pl-[0.45rem] rounded-full">
                <FaCheck className="items-center flex text-center " />
              </span>{" "}
              <h4 className="text-[18px] font-semibold leading-[30px]">
                Economy Cars
              </h4>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm border-2 w-[2rem] h-[2rem] text-center align-middle items-center bg-gray-700 pt-[0.45rem] pl-[0.45rem] rounded-full">
                <FaCheck className="items-center flex text-center " />
              </span>{" "}
              <h4 className="text-[18px] font-semibold leading-[30px]">Bus</h4>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white text-sm border-2 w-[2rem] h-[2rem] text-center align-middle items-center bg-gray-700 pt-[0.45rem] pl-[0.45rem] rounded-full">
                <FaCheck className="items-center flex text-center " />
              </span>{" "}
              <h4 className="text-[18px] font-semibold leading-[30px]">Van</h4>
            </div>
          </div>
          <button className="border-0 text-white px-[1rem] my-[2rem] py-[8px] bg-orange-400 rounded-md ">
            Explore more
          </button>
        </div>
        <div className="w-[50%] relative max-lg:hidden  rounded-xl">
          {/* <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute top-0-0 z-30 w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg>
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b"></path>
                                </svg> */}
          <img
            src={require("../Assets/WhatsApp Image 2024-05-28 at 3.16.46 PM.jpeg")}
            alt=""
            className="rounded-xl relative"
          />
          <div className="absolute justify-center items-center   flex  top-0 w-full h-full">
           <Button  onClick={handleClickOpen}>
            <span className="border-0 rounded-full w-[3rem] h-[3rem] pt-[0.9rem] bg-orange-400 pl-[1rem]">
            {/* <Button  onClick={handleClickOpen}> */}
              <FaPlay className="text-xl text-white  " />
            </span>
            </Button>
          </div>
        </div>
      </div>
      <AlertDialog open={open} setOpen={setOpen} handleClickOpen={handleClickOpen}/>
    </div>
  );
}
