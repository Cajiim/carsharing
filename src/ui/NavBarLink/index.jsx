import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./index.scss";

const NavBarLink = ({
  link,
  classNameLink,
  classNameLine,
  src,
  classNameImg,
  classNameText,
  text,
  handlClick,
}) => (
  <NavLink
    to={link}
    className={({ isActive }) =>
      isActive ? `${classNameLink}_active` : `${classNameLink}`
    }
  >
    <li className={classNameLine} onClick={handlClick}>
      <img src={src} alt="BlogIcon" className={classNameImg} />
      <span className={classNameText}>{text}</span>
    </li>
  </NavLink>
);

NavBarLink.propTypes = {
  link: PropTypes.string,
  classNameLink: PropTypes.string,
  classNameLine: PropTypes.string,
  src: PropTypes.string,
  classNameImg: PropTypes.string,
  classNameText: PropTypes.string,
  text: PropTypes.string,
  handlClick: PropTypes.func,
};
NavBarLink.defaultProps = {
  link: "",
  classNameLink: "",
  classNameLine: "",
  src: "",
  classNameImg: "",
  classNameText: "",
  text: "",
  handlClick: () => {},
};
export default NavBarLink;
