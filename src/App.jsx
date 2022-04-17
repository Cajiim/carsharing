import React from 'react';


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

  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/category/map' element={<Category/>}/>
        <Route exact path='/category/map/store' element={<Store/>}/>
        <Route exact path='/category/map/store/additionally' element={<Additionally/>}/>
        <Route exact path='/category/map/store/additionally/my' element={<My/>}/>
        <Route exact path='/category/map/store/additionally/my/orderlist' element={<Orderlist/>}/>
      </Routes>


    </Router>

    </>
  );
}

export default App;
