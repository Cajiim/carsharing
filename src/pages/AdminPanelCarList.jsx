import React from "react";

import NavBar from "../components/NavBarAdminPanel";
import Header from "../components/HeaderAdmin";
import Footer from "../components/FooterAdminPanel";
import CarList from '../components/CarListAdminPanel'

function AdminPanelCarList() {
  return (
    <div className="adminPanelCarList_container">
      <NavBar />
      <div className="adminPanelCarList_container_rightSide">
        <Header />

        <CarList />

        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelCarList;