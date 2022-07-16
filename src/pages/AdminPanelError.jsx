import React from "react";

import NavBar from "../components/NavBarAdminPanel";
import Header from "../components/HeaderAdmin";
import Footer from "../components/FooterAdminPanel";

function AdminPanelErrorPage() {
  return (
    <div className="adminPanelErrorPage_container">
      <NavBar />
      <div className="adminPanelErrorPage_container_mainContent">
        <Header />
        <div className="adminPanelErrorPage_container_mainContent_ErrorBlock">
          <h2 className="adminPanelErrorPage_container_mainContent_ErrorBlock_title">
            500
          </h2>
          <p className="adminPanelErrorPage_container_mainContent_ErrorBlock_textOne">
            Что то пошло не так
          </p>
          <p className="adminPanelErrorPage_container_mainContent_ErrorBlock_textTwo">
            Попробуйте перезагрузить страницу
          </p>
          <button
            type="button"
            className="adminPanelErrorPage_container_mainContent_ErrorBlock_button"
          >
            Назад
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminPanelErrorPage;
