import React from "react";

import "./index.scss";

function FooterAdminPanel() {
  return (
    <footer className="footerAdminPanel">
      <div className="footerAdminPanel_links">
        <span>Главная страница</span>
        <span>Ссылка</span>
      </div>
      <span className="footerAdminPanel_year">
        Copyright © 2020
      </span>
    </footer>
  );
}

export default FooterAdminPanel;
