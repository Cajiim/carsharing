import React from "react";

import NavBar from "../components/NavBarAdminPanel";
import Header from "../components/HeaderAdmin";
import Footer from "../components/FooterAdminPanel";


function AdminPanelCarOrders() {
  return (
    <div className="adminPanelCarOrders_container">
      <NavBar />
      <div className="adminPanelCarOrders_container_rightSide">
        <Header />

   

        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelCarOrders;