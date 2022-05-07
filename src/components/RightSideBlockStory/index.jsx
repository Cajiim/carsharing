import s from './index.scss'

import {useSelector} from 'react-redux';

function RightSideBlockStory () { 
    const models = useSelector(state => state.cart.modelInCart)
    const price = models.reduce((acc, cart) => acc = cart.price, 'от 10 000 - 32 000 Р')
    return (
        <div className='rightSideBlock_container'>
            <h4 className='rightSideBlock_container_order'>
                Ваш заказ:
            </h4>
            <ul className='rightSideBlock_content clear'>
                <li className='rightSideBlock__text'>
                    <span className='rightSideBlock__text_post'>Пункт выдачи</span>
                    <div></div>
                    <p className='rightSideBlock__text_city-street'>
                    <span className='rightSideBlock__text_city_street'>Ульяновск,</span>
                    <span className='rightSideBlock__text_city_street'>Нариманова 42</span>
                    </p>
                </li>
                <li className='rightSideBlock__text'>
                    <span className='rightSideBlock__text_post'>Модель</span>
                    <div></div>
                    <p className='rightSideBlock__text_city-street'>
                    <span className='rightSideBlock__text_city_street'>Hynday, i30 N</span>
                    
                    </p>
                </li>
                <li className='rightSideBlock__text'>
                    <span className='rightSideBlock__text_post'>Цвет</span>
                    <div></div>
                    <p className='rightSideBlock__text_city-street'>
                    <span className='rightSideBlock__text_city_street'>Голубой</span>
                    
                    </p>
                </li>
                <li className='rightSideBlock__text'>
                    <span className='rightSideBlock__text_post'>Длительность аренды</span>
                    <div></div>
                    <p className='rightSideBlock__text_city-street'>
                    <span className='rightSideBlock__text_city_street'>1д 2ч</span>
                    
                    </p>
                </li>
                <li className='rightSideBlock__text'>
                    <span className='rightSideBlock__text_post'>Тариф</span>
                    <div></div>
                    <p className='rightSideBlock__text_city-street'>
                    <span className='rightSideBlock__text_city_street'>На сутки</span>
                    
                    </p>
                </li>
                <li className='rightSideBlock__text'>
                    <span className='rightSideBlock__text_post'>Полный бак</span>
                    <div></div>
                    <p className='rightSideBlock__text_city-street'>
                    <span className='rightSideBlock__text_city_street'>Да</span>
                    
                    </p>
                </li>
            </ul>
            <b className='rightSideBlock__price'>
                Цена: {price}
            </b>
            <button className='rightSideBlock__button'>Выбрать модель</button>

        </div>
    );
}

export default RightSideBlockStory;