import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import FinalOrderPage from "./pages/FinalOrder";
import AdminPanelCarCart from "./pages/AdminPanelCarCart";
import AdminPanelCarList from "./pages/AdminPanelCarList";
import AdminPanelCarOrders from "./pages/AdminPanelCarOrders";
import AdminPanelError from "./pages/AdminPanelError";
import AdminPanelSignUp from "./pages/AdminPanelSignUp";
import AdminPanelLogin from "./pages/AdminPanelLogin";
import Authorization from "./hooks";

const App = () => {
  const { isAuthorization } = Authorization();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/order" element={<Category />} />
        <Route exact path="/myOrder" element={<FinalOrderPage />} />
        <Route exact path="/register" element={<AdminPanelSignUp />} />
        <Route exact path="/login" element={<AdminPanelLogin />} />
        <Route
          exact
          path="/admin/carCart"
          element={
            !isAuthorization ? (
              <Navigate replace to="/login" />
            ) : (
              <AdminPanelCarCart />
            )
          }
        />
        <Route
          exact
          path="/admin/carList"
          element={
            !isAuthorization ? (
              <Navigate replace to="/login" />
            ) : (
              <AdminPanelCarList />
            )
          }
        />
        <Route
          exact
          path="/admin/carOrders"
          element={
            !isAuthorization ? (
              <Navigate replace to="/login" />
            ) : (
              <AdminPanelCarOrders />
            )
          }
        />
        <Route exact path="*" element={<AdminPanelError />} />
      </Routes>
    </Router>
  );
};

export default App;
