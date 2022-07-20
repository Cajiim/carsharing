import React from "react";

import NavBar from "../../components/NavBarAdminPanel";
import Header from "../../components/common/HeaderAdmin";
import Footer from "../../components/common/FooterAdminPanel";
import CarList from "../../components/CarListAdminPanel";
import "./index.scss";

const AdminPanelCarList = () => (
  <div className="adminPanelCarList_container">
    <NavBar />
    <div className="adminPanelCarList_container_rightSide">
      <Header />
      <CarList />
      <Footer />
    </div>
  </div>
);

export default AdminPanelCarList;
