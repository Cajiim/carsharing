import React from 'react';

import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { store } from './redux';


function App() {


  return (
    <Provider store={store}>
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/category/map' element={<Category />} />
          </Routes>


        </Router>

      </>
    </Provider>
  );
}

export default App;
