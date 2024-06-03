import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';



// import './styles.css';

// import required modules
// import { EffectFade } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

export default function Banner() {
  return (
    <div className='w-full relative h-[100%] flex justify-center items-center ' >
      <div className='lg:h-[90vh] h-[100%] overflow-hidden w-[100%] relative '>
        <div>
        {/* <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide> */}
          <img src={require('../Assets/banner.webp')} alt='banner' className='w-[100%] max-md:h-[70vh]'/>
        {/* </SwiperSlide>
         <SwiperSlide>
          <img src={require('../Assets/banner1.jpg')} />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>  */}
      {/* </Swiper> */}
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
