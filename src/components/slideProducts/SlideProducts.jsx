import React from 'react'
import Product from './Product'

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import './slideProducts.css'

function SlideProducts({ title, data }) {
  return (
    <div className="slide_products">
      <div className='container'>
        <div className='top_slide'>
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates?</p>
        </div>
 
        <Swiper
          autoplay={{
            delay: 3000, // ⏳ كل 3 ثواني
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >



          {data.map((item)=> {
            return (
              <SwiperSlide><Product item={item} /></SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default SlideProducts
