
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import One from '../../assets/img/one.png';
import Two from '../../assets/img/two.png';
import Three from '../../assets/img/three.png';
import Four from '../../assets/img/four.png';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


import styles from './Slider.module.scss';

import SlideContainer from '../slideContainer';


const arr = [
  {
    id: '1',
    title: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    buttonText: 'Подробнее',
    img: One,
    buttonStyle: 'One'
  },
  {
    id: '2',
    title: 'Страховка',
    text: 'Полная страховка страховка автомобиля',
    buttonText: 'Подробнее',
    img: Two,
    buttonStyle: 'Two'
  },
  {
    id: '3',
    title: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счет',
    buttonText: 'Подробнее',
    img: Three,
    buttonStyle: 'Three'
  },
  {
    id: '4',
    title: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    buttonText: 'Подробнее',
    img: Four,
    buttonStyle: 'Four'
  }
]




export default function Slider() {

  return (
    <div className='sliderSW'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        /* scrollbar={{ draggable: true }} */
        speed={1200}
        centeredSlidesBounds={true}
        loop={true}

      >
        {arr.map((obj) =>

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
              <img src={obj.img} alt='slide' className={styles.slideImg} />
            </div>
          </SwiperSlide>)}
      </Swiper>

    </div>
  );
};




