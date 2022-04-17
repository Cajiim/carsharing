
import styles from './index.scss'
import Geo from '../../assets/svg/Group.svg'

function LeftSide() {
  return (
    <div className='left-Container'>

      <header className='head'>
        <h2 className='head__name'>Need for drive</h2>
        <ul className='head__geolocation clear'>
          <li >
            <img className='head__geolocation_img' src={Geo} alt="Геолокация"></img>
            <span className='head__geolocation_city'>Ульяновск</span>
          </li>
        </ul>
      </header>

      <div className='leftContent'>
        <h1><span className='leftContent__title'>Каршеринг</span><br>
        </br> <span className='leftContent-title'>Need for drive</span>
        </h1>
        <ul className='leftContent__container clear'>
          <li className='leftContent__container_text '><span>Поминутная аренда авто твоего города</span>
          </li>
        </ul>
        <button className='leftContent__container_button'>Забронировать</button>
      </div>

      <footer className='foot'>
        <p className='foot__year'>© 2016-2019 «Need for drive»</p>
        <p className='foot__number'>8 (495) 234-22-44</p>
      </footer>
    </div>



  );
}


export default LeftSide;