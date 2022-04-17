
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



export default function Slider() {
  return (
    <div className='sliderSW'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        /* spaceBetween={50} */

        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={2400}
        centeredSlidesBounds={true}
        
        //onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)} 
        //className='mySwiper'
      >
        <SwiperSlide>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayTwo}>

              <div className={styles.slideContainer}>
                {/* <div className='greenContain'></div> */}
                <h3 className={styles.slideH}>Бесплатная парковка</h3>
                <p className={styles.slideText}>Оставляйте машину на платных городских{/* <br></br> */} парковках и разрешенных местах, не {/* <br></br> */} нарушая ПДД, а также в аэропортах.</p>
                <button className={styles.informationOne}>Подробнее</button>
              </div>

            </div>
            <img src={One} alt='slide' className={styles.slideImg}/>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayTwo}>

              <div className={styles.slideContainer}>
                <h3 className={styles.slideH}>Страховка</h3>
                <p className={styles.slideText}>Полная страховка страховка автомобиля</p>
                <button className={styles.informationTwo}>Подробнее</button>
              </div>

            </div>
            <img src={Two} alt='slide' className={styles.slideImg}/>
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

            </div>
            <img src={Three} alt='slide' className={styles.slideImg}/>
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

            </div>
          <img src={Four} alt='slide' className={styles.slideImg}/>
          </div>
          </SwiperSlide>

      </Swiper>

    </div>
  );
};




