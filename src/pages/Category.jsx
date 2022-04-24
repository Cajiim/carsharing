

import React from 'react';
import Navigation from '../components/navigation';


import YandexMap from '../components/map'
import { Autocomplete } from '../components/Autocomplete';
import RightSideBlock from '../components/RightSideBlock';
import HeaderPage from '../components/HeaderPage';

function Category() {

    return (
        <div className='container__category'>
            <div className='navigation'>
                <Navigation />
            </div>
            <div className='mainContent__page'>
                <HeaderPage/>

                <div className='category__container'>
                    <div className='category__container_leftSide'>
                         <Autocomplete />
                        <YandexMap /> 
                    </div>
                    <div className='category__container_rightSide'>
                        <RightSideBlock />

                    </div>
                </div>

            </div>


        </div>

    )


}

export { Category }; 