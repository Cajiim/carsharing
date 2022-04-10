import React from 'react';
/* import Slider from './components/slider';
import LeftSide from './components/leftSide';
import Navigation from './components/navigation';
import Overflow from './components/overflow'; */
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Category} from './pages/Category';
import { Store } from './pages/Store';
import { Additionally } from './pages/Additionally';
import { My } from './pages/My';
import { Orderlist } from './pages/Orderlist';

function App() {

  /* const [overflowOpened, setOverflowOpened] = React.useState(false); */
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/catygory/map' element={<Category/>}/>
        <Route exact path='/catygory/map/store' element={<Store/>}/>
        <Route exact path='/catygory/map/store/additionally' element={<Additionally/>}/>
        <Route exact path='/catygory/map/store/additionally/my' element={<My/>}/>
        <Route exact path='/catygory/map/store/additionally/my/orderlist' element={<Orderlist/>}/>
      </Routes>

      {/* <div className="container">
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

      </div> */}

    </Router>

    </>
  );
}

export default App;
