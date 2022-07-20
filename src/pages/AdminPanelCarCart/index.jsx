import React from "react";
import NavBar from "../../components/NavBarAdminPanel";
import Header from "../../components/common/HeaderAdmin";
import Footer from "../../components/common/FooterAdminPanel";
import CarCard from "../../components/CarCardAdminPanel";

import "./index.scss";

const AdminPanelCarCart = () => (
  <div className="adminPanelCarCart_container">
    <NavBar />
    <div className="adminPanelCarCart_container_rightSide">
      <Header />
      <CarCard />
      <Footer />
    </div>
  </div>
);

export default AdminPanelCarCart;
