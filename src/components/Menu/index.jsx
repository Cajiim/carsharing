import React from 'react';
import styles from './index.scss'

import Facebook from '../../assets/svg/FacebookWhite.svg'
import Instagram from '../../assets/svg/InstagramWhite.svg'
import Telegram from '../../assets/svg/TelegramWhite.svg'


console.log(styles)

function Menu({ active, setActive }) {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='overflow'>
                <div className='menu__content'>
                    <div className='menu__content__items'>
                        <div className='menu__content__items__text'>
                            <p className='menu__content__items-text'>ПАРКОВКА</p>
                            <p className='menu__content__items-text'>СТРАХОВКА</p>
                            <p className='menu__content__items-text'>БЕНЗИН</p>
                            <p className='menu__content__items-text'>ОБСЛУЖИВАНИЕ</p>
                        </div>
                        <div className=''>
                            <img src={Facebook} alt='Facebook' className='menu__content__items__img'></img>
                            <img src={Instagram} alt='Instagram' className='menu__content__items__img'></img>
                            <img src={Telegram} alt='Telegram' className='menu__content__items__img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Menu;