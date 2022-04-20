/* import Navigation from "../components/navigation";
import Generalhead from "../components/generalhead"; */

import React from 'react';
import Navigation from '../components/navigation';
import Vector from '../assets/svg/Vector.svg';

function Category() {

    return (
        <div className='container__category'>
            <div className='navigation'>
                <Navigation />
            </div>
            <div className='mainContent__category'>
                <header>
                    <div>
                        <div className='header__title'>
                            <h1 className="title__name">
                                Need for drive
                            </h1>
                            <ul className='clear'>
                                <li >
                                    <img className='' src="\img\Group.svg" alt="Геолокация"></img>
                                    <span>Ульяновск</span>
                                </li>
                            </ul>
                        </div>
                        <nav className="">
                            <ul className='navigation__category clear'>
                                <li className="navigation__category_options">
                                    <span>Местоположение</span>
                                    <img src={Vector} alt='Vector' className='navigation__category_img'/>
                                </li>
                                <li className="navigation__category_options">
                                    <span>Модель</span>
                                    <img src={Vector} alt='Vector' className='navigation__category_img'/>
                                </li>
                                <li className="navigation__category_options">
                                    <span>Дополнительно</span>
                                    <img src={Vector} alt='Vector' className='navigation__category_img'/>
                                </li>
                                <li className="navigation__category_options">
                                    <span>Итого</span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </header>
                <div>


                </div>

            </div>


        </div>

    )


}

export { Category }; 