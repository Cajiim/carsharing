import React from "react";

import NavBar from "../../ui/NavBarAdminPanel";
import Header from "../../common/HeaderAdmin";
import Footer from "../../common/FooterAdminPanel";
import CarList from '../components/CarListAdminPanel'
import './index.scss'

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