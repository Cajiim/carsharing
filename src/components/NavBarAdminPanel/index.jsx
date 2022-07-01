import React from "react";
import { NavLink } from "react-router-dom";
import BlogIcon from "../../assets/svg/adminPanelSvg/BlogIcon.svg";
import BlogPostsIcon from "../../assets/svg/adminPanelSvg/BlogPostsIcon.svg";
import AddNewPostIcon from "../../assets/svg/adminPanelSvg/AddNewPostIcon.svg";
import OverviewComponentsIcon from "../../assets/svg/adminPanelSvg/OverviewComponentsIcon.svg";
import FormsComponentsIcon from "../../assets/svg/adminPanelSvg/FormsComponentsIcon.svg";
import PersonIcon from "../../assets/svg/adminPanelSvg/PersonIcon.svg";
import ErrorIcon from "../../assets/svg/adminPanelSvg/ErrorIcon.svg";

import "./index.scss";

function NavBarAdminPanel() {
  return (
    <div className="navBarAdminPanel_container">
      <nav className="navBarAdminPanel_container_leftSide">
        <ul className="navBarAdminPanel_container_leftSide_navigation">
          <NavLink
            to="/admin/carCart"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content border-top">
              <img
                src={BlogIcon}
                alt="BlogIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Карточка автомобиля
              </span>
            </li>
          </NavLink>

          <NavLink
            to="/admin/carList"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content">
              <img
                src={BlogPostsIcon}
                alt="BlogPostsIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Список авто
              </span>
            </li>
          </NavLink>

          <NavLink
            to="/admin/carOrders"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content">
              <img
                src={AddNewPostIcon}
                alt="AddNewPostIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Заказы
              </span>
            </li>
          </NavLink>

          <NavLink
            to="/admin/menuFour"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content">
              <img
                src={OverviewComponentsIcon}
                alt="OverviewComponentsIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Menu 4
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/admin/menuFive"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content">
              <img
                src={FormsComponentsIcon}
                alt="FormsComponentsIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Menu 5
              </span>
            </li>
          </NavLink>

          <NavLink
            to="/admin/menuSix"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content">
              <img
                src={PersonIcon}
                alt="PersonIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Menu 6
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/admin/menuSeven"
            className={({ isActive }) =>
              isActive
                ? "navBarAdminPanel_container_leftSide_navigation_linksActive"
                : "navBarAdminPanel_container_leftSide_navigation_links"
            }
          >
            <li className="navBarAdminPanel_container_leftSide_navigation_content">
              <img
                src={ErrorIcon}
                alt="ErrorIcon"
                className="navBarAdminPanel_container_leftSide_navigation_content_img"
              />
              <span className="navBarAdminPanel_container_leftSide_navigation_content_text">
                Menu 7
              </span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarAdminPanel;
