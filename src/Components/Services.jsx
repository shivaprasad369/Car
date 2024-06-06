import React from "react";
import data from './constant/sevice.jsx'
export default function Services() {
  // const [color,setColor]=useState(false)
  return (
    <div id="services" className="flex w-[100vw] h-[100%] justify-center items-center px-[3%]  xl:px-[10%]">
      <div className="max-w-[1400px] flex flex-col justify-center items-center w-full">
        <div>
          <div className="text-[14px] text-center leading-[14px] font-[400] text-orange-500 nb-[15px] tracking-[2px]">
            What We Do
          </div>
          <div className="text-[35px] text-[black] font-[700] leading-[1.25em] mb-[15px] ">
            Our <span className="text-orange-400">Services</span>
          </div>
        </div>
        <div className="xl:flex max-xl:flex-wrap  w-[100%] max-lg:px-[3%]">
      
       {data?.map((data,index)=>(

        <div className="lg:w-[350px]  max-md:w-[100%] max-lg:pb-[15px] md:mr-[30px]" key={data?.id} >

          <div className="relative rounded-[20px] mb-[15px] overflow-hidden">
            <img
              src={require('../Assets/'+data?.image)}
              className="h-[20rem] w-[100%] object-cover  img-fluid"
              alt=""
            />
            <div className="absolute bottom-[0rem] text-right py-[30px] pr-[15px] pl-[110px]">
              <h4 className={`text-orange-400 hover:text-inherit capitalize text-[21px] text-left  font-[700] leading-[1.5em] pb-[15px]`}>
                {data?.title}
              </h4>
            </div>

            <div className="absolute border-0 bottom-0 left-0 w-[90px] h-[90px] leading-[90px] text-center rounded-tr-[40px] bg-white">
            {/* eslint-disable-next-line */}
              <a
                href="#"
                className="aboslute top-[15px] items-center flex justify-center text-center left-[15px] right-[15px] bottom-[15px] rounded-full "
              >
                <div className="w-[60px] mt-[15px] h-[60px] leading-[60px] border-[1px] border-orange-400 rounded-full">
                 {data?.id}
                </div>
              </a>
              <div className="absolute top-[-44px] left-[-1px] rotate-[270deg]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="absolute bottom-[-1px] right-[-44px] rotate-[270deg]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
       ))
        }
         </div>
      </div>
    </div>
  );
}
