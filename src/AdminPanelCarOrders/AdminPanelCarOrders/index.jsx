import React from "react";

import NavBar from "../../ui/NavBarAdminPanel";
import Header from "../../common/HeaderAdmin";
import Footer from "../../common/FooterAdminPanel";
import CarOrders from "../components/CarOrdersAdminPanel";

function AdminPanelCarOrders() {
  return (
    <div className="adminPanelCarOrders_container">
      <NavBar />
      <div className="adminPanelCarOrders_container_rightSide">
        <Header />

        <CarOrders />

        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelCarOrders;
