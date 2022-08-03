import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../../redux/cart/reducerCarCartSettings";
import BlogIcon from "../../assets/svg/BlogIcon.svg";
import BlogPostsIcon from "../../assets/svg/BlogPostsIcon.svg";
import AddNewPostIcon from "../../assets/svg/AddNewPostIcon.svg";
import OverviewComponentsIcon from "../../assets/svg/OverviewComponentsIcon.svg";
import FormsComponentsIcon from "../../assets/svg/FormsComponentsIcon.svg";
import NavBarLink from "../../ui/NavBarLink";
import { deleteUser } from "../../redux/cart/reducerUserSlice";
import "./index.scss";

const NavBarAdminPanel = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
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
  const emailStorage = localStorage.getItem("email");
  const handlClickCartModel = () => {
    dispatch(clearData());
  };

  return (
    <div className="navBarAdminPanel">
      <nav className="navBarAdminPanel__container">
        {email || emailStorage ? (
          <div className="userEmail">
            <p className="userEmail__text">{email || emailStorage}</p>
            <button
              type="button"
              onClick={() => {
                handlUserDelete();
                handlSignOut();
                localStorage.clear();
                history("/login");
              }}
            >
              Выйти
            </button>
          </div>
        ) : null}
        <ul className="navBarAdminPanel__linkList">
          <NavBarLink
            link="/admin/carCart"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line navBarLink__line_first"
            src={BlogIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Карточка автомобиля"
            handlClick={handlClickCartModel}
          />
          <NavBarLink
            link="/admin/carList"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line"
            src={BlogPostsIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Список авто"
          />
          <NavBarLink
            link="/admin/carOrders"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line"
            src={AddNewPostIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Заказы"
          />
          <NavBarLink
            link="/admin/menuFour"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line"
            src={OverviewComponentsIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Menu 4"
          />
          <NavBarLink
            link="/admin/menuFive"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line"
            src={FormsComponentsIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Menu 5"
          />
          <NavBarLink
            link="/admin/menuSix"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line"
            src={FormsComponentsIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Menu 6"
          />
          <NavBarLink
            link="/admin/menuSeven"
            classNameLink="navBarLink"
            classNameLine="navBarLink__line"
            src={FormsComponentsIcon}
            classNameImg="navBarLink__img"
            classNameText="navBarLink__text"
            text="Menu 7"
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavBarAdminPanel;
