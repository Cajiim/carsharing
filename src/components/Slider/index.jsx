import React, { memo } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import arr from "../../data/sliderArr";
import SlideContainer from "../SlideContainer";
import "./index.scss";

const Slider = () => (
  <div className="slider">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
      centeredSlides
      navigation
      pagination={{ clickable: true }}
      speed={1200}
      centeredSlidesBounds
      loop
    >
      {arr.map((obj) => (
        <SwiperSlide key={obj.id}>
          <div className="slider__overlay">
            <SlideContainer
              title={obj.title}
              text={obj.text}
              buttonText={obj.buttonText}
              buttonStyle={obj.buttonStyle}
            />
          </div>
          <img src={obj.img} alt="slide" className="slider__img" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default memo(Slider);
