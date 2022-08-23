import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import ham1 from "../../assets/images/imgs/ham1.jpg"
import ham2 from "../../assets/images/imgs/ham2.jpg"
import ham3 from "../../assets/images/imgs/ham3.jpg"
import f1 from "../../assets/images/imgs/f1.jpeg"
import f1logo from "../../assets/images/pngs/f1logo.png"

import 'swiper/css';
// import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import "./Main.scss"


export const Main = () => {

  const [theme, setTheme] = useState<string>('blue')
    const [prevTheme, setPrevTheme] = useState<string>('blue')

  const themeHandler = (index: number) => {

    switch (index) {
        case 1:
            setPrevTheme(theme)
            setTheme('blue')
            break
        case 5:
            setPrevTheme(theme)
            setTheme('blue')
            break
        case 2:
            setPrevTheme(theme)
            setTheme('green')
            break
        case 3:
            setPrevTheme(theme)
            setTheme('orange')
            break
        case 0:
            setPrevTheme(theme)
            setTheme('pink')
            break
        case 4:
            setPrevTheme(theme)
            setTheme('pink')
            break
      }
  }

  return (
    <div className='mainContent'>
        <div className="mainContent__titleBlock">
            <div className="mainContent__titleBlock_subtitle">Formula 1</div>
            <div className="mainContent__titleBlock_title">HAMILTON</div>
            <div className="mainContent__titleBlock_logo"> <img src={f1} alt="f1logo" /> </div>
        </div>
        <div className='mainContent__swiper'>
          <Swiper
              modules={[Navigation, Pagination]}
              // className={startAnim(theme, prevTheme)}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChangeTransitionStart={(swiper) => themeHandler(swiper.activeIndex)}
              navigation
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="slider"
          >
         
          <SwiperSlide>
            <div className="slider_slide">
                <div className="slider__slide_content">
                    <img src={ham1} alt="ham1"  />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_slide">
                <div className="slider__slide_content">
                    <img src={ham2} alt="ham1"  />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_slide">
                <div className="slider__slide_content">
                    <img src={ham3} alt="ham1"  />
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>

    </div>
  
  )
}
