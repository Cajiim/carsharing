import React from 'react';

import Slider from '../components/slider';
import LeftSide from '../components/leftSide';
import Navigation from '../components/navigation';
import Overflow from '../components/overflow';



function Home() {

    const [overflowOpened, setOverflowOpened] = React.useState(false);
    return (

        <div className="container">
            <div className="overlay">
                {overflowOpened ? <Overflow onClose={() => setOverflowOpened(false)} /> : undefined}
            </div>

            <div className="navigation">
                <Navigation onClickBurger={() => setOverflowOpened(true)} />
            </div>

            <div className="leftSide">
                <LeftSide />
            </div>

            <div className='rightSide'>
                <Slider />
            </div>

        </div>
    );
}

export { Home };