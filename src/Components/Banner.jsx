import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='w-full relative h-[100%] flex justify-center items-center ' >
      <div className=' md:h-[100vh] overflow-hidden w-[100%] relative '>
        <div>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
    
        <SwiperSlide>
          <img  src={require('../Assets/banner3.jpg')} alt='banner' className='w-[100%] object-cover md:h-[100vh] max-md:h-[70vh]'/>
        </SwiperSlide>
         <SwiperSlide className='max-md:hidden'>
          <img src={require('../Assets/Gallert.jsx/3.jpeg')} alt='banner' className='w-[100%] md:hidden  object-cover md:h-[100vh] max-md:h-[70vh]'/>
        
        </SwiperSlide>
        {/* <SwiperSlide className='md:hidden '>
          <img src={require('../Assets/Gallert.jsx/1.jpeg')} alt='banner' className='w-[100%] object-cover md:h-[100vh] max-md:h-[70vh]'/>

        </SwiperSlide> */}
        <SwiperSlide>
          <img src={require('../Assets/Gallert.jsx/5.jpeg')} alt='banner' className='w-[100%] object-cover md:h-[100vh] max-md:h-[70vh]'/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>  */}
      </Swiper>
        </div>
      </div>
      <div className='absolute w-full h-full flex justify-center z-40 flex-col  items-center'>
      <h4 className="text-white lg:text-[20px] md:text-[13px] opacity-[0.8] uppercase font-400 tracking-wider">
                                                Book Any Luxury Car in low price
                                            </h4>
        <h className="lg:text-[80px] max-md:text-[50px] md:text-[60px] text-white tracking-wider font-[700] uppercase leading-[4rem]">car Rental</h>
      </div>
    </div>
  )
}
