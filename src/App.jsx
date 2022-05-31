import React from 'react';

import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import  Home  from './pages/Home';
import  Category  from './pages/Category';
import  FinalOrderPage  from './pages/FinalOrder';
import { store } from './redux';


function App() {


  return (
    <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/category/map' element={<Category />} />
            <Route exact path='/myOrder' element={<FinalOrderPage />} /> 
          </Routes>
        </Router>
    </Provider>
  );
}

export default App;
