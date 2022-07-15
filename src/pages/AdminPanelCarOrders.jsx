import React from "react";

import NavBar from "../components/NavBarAdminPanel";
import Header from "../components/HeaderAdmin";
import Footer from "../components/FooterAdminPanel";
import CarOrders from '../components/CarOrdersAdminPanel'

function AdminPanelCarOrders() {
  return (
    <div className="adminPanelCarOrders_container">
      <NavBar />
      <div className="adminPanelCarOrders_container_rightSide">
        <Header />

        <CarOrders/>

        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelCarOrders;