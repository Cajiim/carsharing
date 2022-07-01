import React from "react";

import NavBar from "../components/NavBarAdminPanel";
import Header from "../components/HeaderAdmin";
import Footer from "../components/FooterAdminPanel";
import CarCard from "../components/CarCardAdminPanel";

function AdminPanelCarCart() {
  return (
    <div className="adminPanelCarCart_container">
      <NavBar />
      <div className="adminPanelCarCart_container_rightSide">
        <Header />

        <CarCard />

        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelCarCart;
