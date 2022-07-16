import React from "react";

import NavBar from "../../ui/NavBarAdminPanel";
import Header from "../../common/HeaderAdmin";
import Footer from "../../common/FooterAdminPanel";
import CarCard from "../components/CarCardAdminPanel";
import "./index.scss";

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
