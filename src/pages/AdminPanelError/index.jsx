import React from "react";

import NavBar from "../../components/NavBarAdminPanel";
import Header from "../../components/common/HeaderAdmin";
import Footer from "../../components/common/FooterAdminPanel";
import Error from "../../components/ErrorAdminPanel";
import "./index.scss";

const AdminPanelErrorPage = () => (
  <div className="adminPanelErrorPage_container">
    <NavBar />
    <div className="adminPanelErrorPage_container_mainContent">
      <Header />
      <Error />
      <Footer />
    </div>
  </div>
);

export default AdminPanelErrorPage;
