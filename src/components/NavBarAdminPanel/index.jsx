import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import BlogIcon from "../../assets/svg/BlogIcon.svg";
import BlogPostsIcon from "../../assets/svg/BlogPostsIcon.svg";
import AddNewPostIcon from "../../assets/svg/AddNewPostIcon.svg";
import OverviewComponentsIcon from "../../assets/svg/OverviewComponentsIcon.svg";
import FormsComponentsIcon from "../../assets/svg/FormsComponentsIcon.svg";
import PersonIcon from "../../assets/svg/PersonIcon.svg";
import ErrorIcon from "../../assets/svg/ErrorIcon.svg";
import { deleteUser } from "../../redux/cart/reducerUserSlice";
import "./index.scss";

const NavBarAdminPanel = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(({ user }) => user);
  const handlUserDelete = () => {
    dispatch(deleteUser());
  };

  const handlSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Вышел пользователь");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navBarAdminPanel_container">
      <nav className="navBarAdminPanel_container_leftSide">
        {email ? (
          <div className="user-email">
            <p>{email}</p>
            <button
              type="button"
              onClick={() => {
                handlUserDelete();
                handlSignOut();
              }}
            >
              Выйти
            </button>
          </div>
        ) : null}
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
};

export default NavBarAdminPanel;
