import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import  '../page/home/home.css'
function HeroSlider() {
  return (
    <>
        <main className='hero'>
            <div className="container">

                <Swiper
                 autoplay={{
                     delay: 2000, // ⏳ كل 3 ثواني
                    disableOnInteraction: false, // يكمّل autoplay حتى لو المستخدم لمس السلايدر
                 }}
                 modules={[Autoplay, Pagination, Navigation]}
                 navigation={true}
                 pagination={true}
                 className="mySwiper">
                    <SwiperSlide>
                        <div class="content ">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller </h3>
                            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                            <Link className='link  btn' to='/'> Shop Now </Link>
                        </div>
                        <img src="src/img/banner_Hero1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller </h3>
                            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                            <Link className='link btn' to='/'> Shop Now </Link>
                        </div>
                        <img src="src/img/banner_Hero2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="content">
                            <h4>Introducing the new</h4>
                            <h3>Microsoft Xbox <br /> 360 Controller </h3>
                            <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                            <Link className='link btn' to='/'> Shop Now </Link>
                        </div>
                        <img src="src/img/banner_Hero3.jpg" alt="" />
                    </SwiperSlide>
                 </Swiper>
            </div>
        </main>

    </>
  )
}

export default HeroSlider