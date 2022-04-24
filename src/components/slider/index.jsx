
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
    key:'1',
    title: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    buttonText: 'Подробнее',
    img:One
  },
  { key:'2',
    title: 'Страховка',
    text: 'Полная страховка страховка автомобиля',
    buttonText: 'Подробнее',
    img:Two
  },
  {
    key:'3',
    title: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счет',
    buttonText: 'Подробнее',
    img:Three

  },
  {
    key:'4',
    title: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    buttonText: 'Подробнее',
    img:Four
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
        scrollbar={{ draggable: true }}
        speed={2400}
        centeredSlidesBounds={true}
      >
        {arr.map((obj) => 
        
        <SwiperSlide key={obj.key}>

          <div className={styles.overlayContainer}>
            <div className={styles.overlayTwo}>

              <SlideContainer
                title={obj.title}
                text={obj.text}
                buttonText={obj.buttonText}
              />
              
            </div>
            <img src={obj.img} alt='slide' className={styles.slideImg} />
          </div>
        </SwiperSlide>)}


        {/* <SwiperSlide>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayTwo}>

              <div className={styles.slideContainer}>
                <h3 className={styles.slideH}>Бесплатная парковка</h3>
                <p className={styles.slideText}>Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.</p>
                <button className={styles.informationOne}>Подробнее</button>
              </div>

              <SlideContainer
                title='Бесплатная парковка'
                text='Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
                buttonText='Подробнее'
              />


            </div>
            <img src={One} alt='slide' className={styles.slideImg} />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayTwo}>

              {<div className={styles.slideContainer}>
                <h3 className={styles.slideH}>Страховка</h3>
                <p className={styles.slideText}>Полная страховка страховка автомобиля</p>
                <button className={styles.informationTwo}>Подробнее</button>
              </div>}
              <SlideContainer
                title='Страховка'
                text='Полная страховка страховка автомобиля'
                buttonText='Подробнее'
              />

            </div>
            <img src={Two} alt='slide' className={styles.slideImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayTwo}>

              <div className={styles.slideContainer}>
                <h3 className={styles.slideH}>Бензин</h3>
                <p className={styles.slideText}>Полный бак на любой заправке города за наш счет</p>
                <button className={styles.informationThree}>Подробнее</button>
              </div>
              <SlideContainer
                title='Бензин'
                text='Полный бак на любой заправке города за наш счет'
                buttonText='Подробнее'
              />

            </div>
            <img src={Three} alt='slide' className={styles.slideImg} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div >
            <div className={styles.overlayTwo}>

              <div className={styles.slideContainer}>
                <h3 className={styles.slideH}>Обслуживание</h3>
                <p className={styles.slideText}>Автомобиль проходит еженедельное ТО</p>
                <button className={styles.informationFour}>Подробнее</button>
              </div>
              <SlideContainer
                title='Бензин'
                text='Автомобиль проходит еженедельное ТО'
                buttonText='Подробнее'
              />

            </div>
            <img src={Four} alt='slide' className={styles.slideImg} />
          </div>
        </SwiperSlide> */}

      </Swiper>

    </div>
  );
};




