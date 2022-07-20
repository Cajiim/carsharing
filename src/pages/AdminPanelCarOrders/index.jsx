import React from "react";

import NavBar from "../../components/NavBarAdminPanel";
import Header from "../../components/common/HeaderAdmin";
import Footer from "../../components/common/FooterAdminPanel";
import CarOrders from "../../components/CarOrdersAdminPanel";
import "./index.scss";

const AdminPanelCarOrders = () => (
  <div className="adminPanelCarOrders_container">
    <NavBar />
    <div className="adminPanelCarOrders_container_rightSide">
      <Header />
      <CarOrders />
      <Footer />
    </div>
  </div>
);

export default AdminPanelCarOrders;
