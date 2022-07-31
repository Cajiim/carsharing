import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../NavBarAdminPanel";
import Header from "../HeaderAdmin";
import Footer from "../FooterAdminPanel";
import "./index.scss";

const Layout = ({ children }) => (
  <div className="adminPanel">
    <NavBar />
    <main className="adminPanel__main">
      <Header />
      {children}
      <Footer />
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};
Layout.defaultProps = {
  children: null,
};

export default Layout;
