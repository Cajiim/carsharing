import s from './index.scss'


function RightSideBlockStory () { 
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
            </ul>
            <b className='rightSideBlock__price'>
                Цена: от 10 000 до 32 000 Р
            </b>
            <button className='rightSideBlock__button'>Выбрать модель</button>

        </div>
    );
}

export default RightSideBlockStory;