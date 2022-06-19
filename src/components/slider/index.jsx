import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import arr from "../../data/sliderArr";
import styles from "./Slider.module.scss";
import SlideContainer from "../slideContainer";

export default function Slider() {
  return (
    <div className="sliderSW">
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
            <div className={styles.overlayContainer}>
              <div className={styles.overlayTwo}>
                <SlideContainer
                  title={obj.title}
                  text={obj.text}
                  buttonText={obj.buttonText}
                  buttonStyle={obj.buttonStyle}
                />
              </div>
              <img src={obj.img} alt="slide" className={styles.slideImg} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
