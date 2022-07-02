import React from "react";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import FinalOrderPage from "./pages/FinalOrder";
import AdminPanelCarCart from "./pages/AdminPanelCarCart";
import AdminPanelCarList from "./pages/AdminPanelCarList";
import AdminPanelCarOrders from "./pages/AdminPanelCarOrders";
import  store  from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/order" element={<Category />} />
          <Route
            exact
            path="/myOrder"                   
            element={<FinalOrderPage />}
          />
          <Route exact path="/admin/carCart" element={<AdminPanelCarCart  />} />
          <Route exact path="/admin/carList" element={<AdminPanelCarList />} />
          <Route exact path="/admin/carOrders" element={<AdminPanelCarOrders />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;




/* 

[
  {
   "id": "1",
   "name": "ELANTRA",
   "minPrice": "12 000",
   "maxPrice": "25 000",
   "model": "Hyundai",
   "img": "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/c31940b4825e7de08c4523e9a81ebe8d0ad04616?fuid=1073273349188760991",
   "class": "economy"
  },
  {
   "id": "2",
   "name": "i30 N",
   "minPrice": "10 000",
   "maxPrice": "32 000",
   "model": "Hyundai",
   "img": "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/4e4ea22ab31217afaaad6cc7af61ec4ca2f2f058?fuid=1073273349188760991",
   "class": "business"
  },
  {
   "id": "3",
   "name": "CRETA",
   "minPrice": "12 000",
   "maxPrice": "25 000",
   "model": "Hyundai",
   "img": "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/fa7d238c33edb42d3aaf49466e5400c66da0415d?fuid=1073273349188760991",
   "class": "economy"
  },
  {
   "id": "4",
   "name": "SONATA",
   "minPrice": "10 000",
   "maxPrice": "32 000",
   "model": "Hyundai",
   "img": "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/0050d35a3265deaece85bdd8cb88e6ae6c3b9401?fuid=1073273349188760991",
   "class": "business"
  },
  {
   "id": "5",
   "name": "ELANTRA",
   "minPrice": "12 000",
   "maxPrice": "25 000",
   "model": "Hyundai",
   "img": "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/c31940b4825e7de08c4523e9a81ebe8d0ad04616?fuid=1073273349188760991",
   "class": "economy"
  },
  {
   "id": "6",
   "name": "i30 N",
   "minPrice": "10 000",
   "maxPrice": "32 000",
   "model": "Hyundai",
   "img": "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/4e4ea22ab31217afaaad6cc7af61ec4ca2f2f058?fuid=1073273349188760991",
   "class": "business"
  }
 ] */