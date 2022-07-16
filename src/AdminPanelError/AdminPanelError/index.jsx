import React from "react";

import NavBar from "../../ui/NavBarAdminPanel";
import Header from "../../common/HeaderAdmin";
import Footer from "../../common/FooterAdminPanel";
import Error from "../components/ErrorAdminPanel";
import "./index.scss";

function AdminPanelErrorPage() {
  return (
    <div className="adminPanelErrorPage_container">
      <NavBar />
      <div className="adminPanelErrorPage_container_mainContent">
        <Header />
        <Error />
        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelErrorPage;
