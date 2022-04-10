import styles from './index.module.scss';
import {Link} from 'react-router-dom'; 

function LeftSide() {
  return (

    <div className={styles.midle}>
      <header>
        <h2 className={styles.titleDrive}>Need for drive</h2>
        <ul className={styles.clear}>
          <li >
            <img className={styles.geoLogo} src="\img\Group.svg" alt="Геолокация"></img>
            <span className={styles.geolocation}>Ульяновск</span>
          </li>
        </ul>
      </header>


      <div className={styles.midlContainer}>
        <h1><span className={styles.carsher}>Каршеринг</span><br>
        </br> <span className={styles.greenColor}>Need for drive</span>
        </h1>
        <ul className={styles.clear + ' ' + styles.arend}>
          <li className={styles.arendPerMinute}><span>Поминутная аренда авто твоего города</span>
          </li>
        </ul>
        <Link to='/catygory/map'><button className={styles.reserve}>Забронировать</button></Link>




      </div>

      <footer className={styles.footerBot + ' ' + styles.footerOverflow}>
        <p className={styles.years}>© 2016-2019 «Need for drive»</p>
        <p className={styles.phone}>8 (495) 234-22-44</p>
      </footer>
    </div>
  );
}


export default LeftSide;