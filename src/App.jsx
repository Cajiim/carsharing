import React from "react";
import {
  /* BrowserRouter as Router, */
  Route,
  Routes,
  Navigate,
  HashRouter
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
import Authorization from "./hooks/useAuthorization";

const App = () => {
  const { isAuthorization } = Authorization();
  const token = localStorage.getItem("token");
  return (
    <HashRouter>
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
            !isAuthorization && !token ? (
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
            !isAuthorization && !token ? (
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
            !isAuthorization && !token ? (
              <Navigate replace to="/login" />
            ) : (
              <AdminPanelCarOrders />
            )
          }
        />
        <Route
          exact
          path="/admin"
          element={
            !isAuthorization && !token ? (
              <Navigate replace to="/login" />
            ) : (
              <AdminPanelCarCart />
            )
          }
        />
        <Route
          exact
          path="*"
          element={
            !isAuthorization && !token ? (
              <Navigate replace to="/login" />
            ) : (
              <AdminPanelError />
            )
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
