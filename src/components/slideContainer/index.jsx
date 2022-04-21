import styles from '../slider/Slider.module.scss';


function slideContainer () {

return (

<div className={styles.slideContainer}>
    <h3 className={styles.slideH}>Бесплатная парковка</h3>
    <p className={styles.slideText}>Оставляйте машину на платных городских{/* <br></br> */} парковках и разрешенных местах, не {/* <br></br> */} нарушая ПДД, а также в аэропортах.</p>
    <button className={styles.informationOne}>Подробнее</button>
</div>

);
}

export default slideContainer;
