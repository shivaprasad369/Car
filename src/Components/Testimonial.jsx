import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
export default function Testimonial() {
  return (
    <div id="test" className="flex justify-center w-[100vw] items-center mt-[2rem]">
      <div className="flex gap-10 flex-col justify-center items-center">
        <div>
          <h1 className="text-[14px] text-center leading-[14px] font-[400] text-orange-400 mb-[15px] uppercase tracking-[2px]">
            Testimonial
          </h1>
          <h1 className="text-[35px] mb-[15px] text-center leading-[1.2em] font-[700]">
            What Clients Say
          </h1>
        </div>
        <div className="flex items-center  justify-center xl:px-[8.5%]  w-[100vw] ">
        <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      style={{
                        '--swiper-navigation-color': 'black',
                        '--swiper-pagination-color': 'black',
                       
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400:{
                          slidesPerView:1,
                        },
                        639: {
                          slidesPerView: 2,
                        },
                        865:{
                          slidesPerView:2
                        },
                        1000:{
                          slidesPerView:3
                        },
                        1500:{
                          slidesPerView:3
                        },
                        1700:{
                          slidesPerView:3
                        }
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper w-[100%]"
                    >
                          <SwiperSlide className=" relative  md:ml-[1.7rem] ">
        <div className="md:w-[333px] max-md:w-[95%] max-md:mx-[2.5%] md:mr-[30px] relative bg-orange-400 h-[22rem]">
          <div className=" px-[40px] py-[40px] rounded-t-[20px] rounded-r-[20px] rounded-l-[0px] rounded-b-[20px] ">
            <div className="absolute top-[1rem] right-0  ">
              <span className="flex gap-1 border-0 py-3 w-[6rem] bg-white top-[-1rem] absolute right-0 pb-7 rounded-bl-[30px] pt-6  text-[15px] text-[#ad8e39] ">
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
              </span>
              <div className=" absolute top-[-1rem]  right-[6rem] rotate-[90deg]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="absolute right-[0] rotate-[90deg] top-[3rem]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-[2rem] left-[1rem]">
            <FaQuoteLeft className="text-[3rem] font-bold text-gray-300" />
          </div>
          <div className="flex flex-col justify-center items-center px-[1rem] pb-[1rem] text-white font-semibold tracking-wider">
            <p>
            Very good Price for all vehicles and driver Vasant and Sanjeev are very good and well experienced persons.
            </p>
            <div className="pt-[2rem] text-center absolute bottom-3">
                <h1 className="text-[18px] uppercase font-bold leading-[15px]">Basava Raddi</h1>
                <span className="text-[14px] tracking-wider font-thin">Customer</span>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=" relative  md:ml-[1.7rem] ">
        <div className="md:w-[333px] max-md:w-[95%] max-md:mx-[2.5%] relative bg-orange-400 h-[22rem]">
          <div className=" px-[40px] py-[40px] rounded-t-[20px] rounded-r-[20px] rounded-l-[0px] rounded-b-[20px] ">
            <div className="absolute top-[1rem] right-0  ">
              <span className="flex gap-1 border-0 py-3 w-[6rem] bg-white top-[-1rem] absolute right-0 pb-7 rounded-bl-[30px] pt-6  text-[15px] text-[#ad8e39] ">
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
              </span>
              <div className=" absolute top-[-1rem]  right-[6rem] rotate-[90deg]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="absolute right-[0] rotate-[90deg] top-[3rem]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-[2rem] left-[1rem]">
            <FaQuoteLeft className="text-[3rem] font-bold text-gray-300" />
          </div>
          <div className="flex flex-col justify-center items-center px-[1rem] pb-[1rem] text-white font-semibold tracking-wider">
            <p>
            Good Service, Fast follow up,good drivers allso, and more importantly trustable.....
            </p>
            <div className="pt-[2rem] text-center absolute bottom-3">
                <h1 className="text-[18px] uppercase font-bold leading-[15px]">Info Guru</h1>
                <span className="text-[14px] tracking-wider font-thin">Customer</span>
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" relative  md:ml-[1.7rem] ">
        <div className="md:w-[333px] max-md:w-[95%] max-md:mx-[2.5%] relative h-[22rem] bg-orange-400 ">
          <div className=" px-[40px] py-[40px] rounded-t-[20px] rounded-r-[20px] rounded-l-[0px] rounded-b-[20px] ">
            <div className="absolute top-[1rem] right-0  ">
              <span className="flex gap-1 border-0 py-3 w-[6rem] bg-white top-[-1rem] absolute right-0 pb-7 rounded-bl-[30px] pt-6  text-[15px] text-[#ad8e39] ">
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
              </span>
              <div className=" absolute top-[-1rem]  right-[6rem] rotate-[90deg]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="absolute right-[0] rotate-[90deg] top-[3rem]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-[2rem] left-[1rem]">
            <FaQuoteLeft className="text-[3rem] font-bold text-gray-300" />
          </div>
          <div className="flex flex-col justify-center items-center px-[1rem] pb-[1rem] text-white font-semibold tracking-wider">
            <p>
            Very satisfied with the rental. The car performed well and was fuel-efficient. The staff provided clear instructions and were very accommodating. Prices were also reasonable.
            </p>
            <div className="pt-[2rem] text-center absolute bottom-3">
                <h1 className="text-[18px] uppercase font-bold leading-[15px]">Mallikarjun Poojari</h1>
                <span className="text-[14px] tracking-wider font-thin">Customer</span>
            </div>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" relative  md:ml-[1.7rem] ">
        <div className="md:w-[333px] max-md:w-[95%] max-md:mx-[2.5%] relative bg-orange-400 h-[22rem] ">
          <div className=" px-[40px] py-[40px] rounded-t-[20px] rounded-r-[20px] rounded-l-[0px] rounded-b-[20px] ">
            <div className="absolute top-[1rem] right-0  ">
              <span className="flex gap-1 border-0 py-3 w-[6rem] bg-white top-[-1rem] absolute right-0 pb-7 rounded-bl-[30px] pt-6  text-[15px] text-[#ad8e39] ">
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
              </span>
              <div className=" absolute top-[-1rem]  right-[6rem] rotate-[90deg]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div className="absolute right-[0] rotate-[90deg] top-[3rem]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-[2rem] left-[1rem]">
            <FaQuoteLeft className="text-[3rem] font-bold text-gray-300" />
          </div>
          <div className="flex flex-col justify-center items-center px-[1rem] pb-[1rem] text-white font-semibold tracking-wider">
            <p>
            Excellent rental service! The vehicle was spotless and ran perfectly. The team was professional and attentive, making the whole process seamless. Will use this company again.
            </p>
            <div className="pt-[2rem] text-center absolute bottom-3">
                <h1 className="text-[18px] uppercase font-bold leading-[15px]">Pundaleek rathod</h1>
                <span className="text-[14px] tracking-wider font-thin">Customer</span>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper> 
        </div>
      
      </div>
    </div>
  );
}
