import {NavLink, Link} from 'react-router-dom';
import Vector from '../../assets/svg/Vector.svg';
import Geo from '../../assets/svg/Group.svg';

import s from './index.scss'

function HeaderPage() {
    return (
        <div>
            <header>
                <div>
                    <div className='header__title'>
                        <h1 className="header__title__name">
                            <NavLink to='/' className='link' activeclassname="selected">Need for drive</NavLink>
                        </h1>
                        <ul className='clear'>
                            <li className='header__title__geolocation'>
                                <img className='' src={Geo} alt="Геолокация"></img>
                                <span className='header__title__city'>Ульяновск</span>
                            </li>
                        </ul>
                    </div>
                    <nav className="">
                        <ul className='navigation__category clear'>
                            <li className="navigation__category_options margin-left">
                                <span><NavLink to='/category/map' className='NavLink'>Местоположение</NavLink></span>
                                <img src={Vector} alt='Vector' className='navigation__category_img' />
                            </li>
                            <li className="navigation__category_options">
                                <span><NavLink to='/category/map/store'>Модель</NavLink></span>
                                <img src={Vector} alt='Vector' className='navigation__category_img' />
                            </li>
                            <li className="navigation__category_options">
                                <span><NavLink to='/category/map/store/additionally'>Дополнительно</NavLink></span>
                                <img src={Vector} alt='Vector' className='navigation__category_img' />
                            </li>
                            <li className="navigation__category_options">
                                <span><NavLink to='/category/map/store/additionally/my'>Итого</NavLink></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>

    );
}


export default HeaderPage;