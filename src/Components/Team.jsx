import React from "react";

export default function Team() {
  return (
    <div className=" xl:px-[10%] max-xl:px-[3%] max-xl: w-[100vw] flex justify-center items-center pt-[2rem]">
      <div className="flex flex-col gap-10 w-[100%] max-w-[1420px] justify-center items-center ">
        <div className="text-[38px] leading-[35px] font-bold text-orange-400">
          <span className="text-[14px] tracking-wider text-orange-400 font-[400]">
            Together We Achieve More
          </span>
          <h1>
            <span className="text-black">Our</span> Team
          </h1>
        </div>
        <div className="md:flex max-md:flex-col justify-center items-center w-[100%] gap-10">
          <div className="flex max-xl:w-[50%] max-md:w-[100%] max-md:mb-[15px] gap-3 flex-col xl:ml-[13%] w-[50%] justify-center items-center">
           
            <div className="border-[3px] border-orange-400 md:w-[18rem] max-md:w-[10rem] max-md:h-[10rem]  md:h-[18rem] overflow-hidden rounded-full">
                <img src={require("../Assets/founder2.jpeg")} alt="owner" />
              </div>
            <div className="flex items-center flex-col text-center pt-3 ">
              <h1 className="text-[22px] font-bold tracking-wide uppercase hover:text-orange-400 transition-all cursor-pointer">
                Sri Mahesh N Shetty
              </h1>
              <span className="text-[18px] font-bold tracking-wider uppercase ">
                Founder
              </span>
              <p className="text-[18px] text-gray-500 mt-[1.5rem] tracking-wider leading-[30px]">
                He is a visionary leader with a passion for innovation and
                excellence. They are dedicated to driving success and inspiring
                their team to achieve greatness.
              </p>
            </div>
          </div>
          <div className="flex max-xl:w-[50%] max-md:w-[100%] max-md:mb-[15px]  justify-center items-center w-[100%] gap-20">
            <div className="flex gap-3 flex-col xl:ml-[13%] xl:w-[50%] justify-center items-center">
            <div className="border-[3px] border-orange-400 md:w-[18rem] max-md:w-[10rem] max-md:h-[10rem]  md:h-[18rem] overflow-hidden rounded-full">
              <img src={require("../Assets/founder1.jpeg")} alt="own"/>
            </div>
              <div className="flex items-center flex-col w-[100%] text-center pt-3 ">
                <h1 className="text-[22px] font-bold tracking-wide uppercase hover:text-orange-400 transition-all cursor-pointer">
                  Sri Prakash N Shetty
                </h1>
                <span className="text-[18px] font-bold tracking-wider uppercase ">
               Founder
                </span>
                <p className="text-[18px] text-gray-500 mt-[1.5rem] tracking-wider leading-[30px]">
                  Visionary leader and strategic thinker, our founder drives
                  innovation and growth. Dedicated to fostering a collaborative
                  culture and achieving excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  mt-[-2rem] md:justify-center max-md:justify-around items-center w-[100%] md:gap-28">
            <div className="flex max-md:w-[45%] flex-col justify-center items-center gap-2">
                <h3 className="md:text-[18px] max-md:text-[13px] md:leading-[30px] font-bold tracking-wider uppercase cursor-pointer hover:text-orange-400 transition-all">Founders </h3>
                <div className="flex flex-col max-md:text-[13px] md:gap-3 max-md:gap-2 mt-4">
                {/* eslint-disable-next-line */}
                    <span className="flex gap-2 items-center"><h4 className="w-[1rem] h-[1rem] rounded-full bg-orange-400"></h4>Mr Sumant M Shetty</span>
                    {/* eslint-disable-next-line */}
                    <span className="flex gap-2 items-center "><h4 className="w-[1rem] h-[1rem] rounded-full bg-orange-400"></h4>Mr Nishant M Shetty</span>
                </div>
            </div>
            <div className="flex flex-col max-md:w-[45%] justify-center items-center gap-2 md:mt-[2rem]">
            <h3 className="md:text-[18px] max-md:text-[13px] leading-[30px] font-bold tracking-wider uppercase cursor-pointer hover:text-orange-400 transition-all">Our Managers</h3>
            <div className="flex flex-col max-md:text-[13px] md:gap-3 max-md:gap-2 md:mt-4">
            {/* eslint-disable-next-line */}
            <span className="flex gap-2 items-center"><h4 className="w-[1rem] h-[1rem] rounded-full bg-orange-400"></h4>Mr Guru Hiremath</span>
            {/* eslint-disable-next-line */}
            <span className="flex gap-2  items-center"><h4 className="w-[1rem] h-[1rem] rounded-full bg-orange-400"></h4>Mr Nishant M Shetty</span>
            
            {/* eslint-disable-next-line */}
            <span className="flex gap-2  items-center"><h4 className="w-[1rem] h-[1rem] rounded-full bg-orange-400"></h4>Miss Sanjana</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
