import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import {
  deleteDataLocation,
  deleteDataModel,
} from "../../redux/cart/reducerFinalOrder";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";
import Vector from "../../assets/svg/Vector.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

const TabsNavigation = () => {
  const dispatch = useDispatch();
  const handleClickTab = (id) => {
    dispatch(setTabIndex(id));
  };
  const handlClickLocation = () => {
    dispatch(deleteDataLocation());
  };
  const handlClickModel = () => {
    dispatch(deleteDataModel());
  };
  const { tabIndex } = useSelector(({ tableIndex }) => tableIndex);
  return (
    <nav className="tabsNavigation">
      <ul className="tabsNavigation__container ">
        <li
          className={cn("tabsNavigation__tab margin-left", {
            tabsNavigation__tab_active: tabIndex === "1",
            tabsNavigation__tab_complete: tabIndex !== "1",
          })}
          onClick={(e) => {
            handleClickTab(e.target.id);
            handlClickLocation();
          }}
          id="1"
        >
          <span className="tabsNavigation__tabName" id="1">
            Местоположение
          </span>
          <img src={Vector} alt="Vector" className="tabsNavigation__img" />
        </li>
        <li
          className={cn("tabsNavigation__tab", {
            tabsNavigation__tab_active: tabIndex === "2",
            tabsNavigation__tab_disabled: tabIndex < "2",
            tabsNavigation__tab_complete: tabIndex > "2",
          })}
          onClick={(e) => {
            handleClickTab(e.target.id);
            handlClickModel();
          }}
          id="2"
        >
          <span className="tabsNavigation__tabName" id="2">
            Модель
          </span>
          <img src={Vector} alt="Vector" className="tabsNavigation__img" />
        </li>
        <li
          className={cn("tabsNavigation__tab", {
            tabsNavigation__tab_active: tabIndex === "3",
            tabsNavigation__tab_disabled: tabIndex < "3",
            tabsNavigation__tab_complete: tabIndex > "3",
          })}
          onClick={(e) => {
            handleClickTab(e.target.id);
          }}
          id="3"
        >
          <span className="tabsNavigation__tabName" id="3">
            Дополнительно
          </span>
          <img src={Vector} alt="Vector" className="tabsNavigation__img" />
        </li>
        <li
          className={cn("tabsNavigation__tab", {
            tabsNavigation__tab_active: tabIndex === "4",
            tabsNavigation__tab_disabled: tabIndex !== "4",
          })}
          onClick={(e) => handleClickTab(e.target.id)}
          id="4"
        >
          <span className="tabsNavigation__tabName" id="4">
            Итого
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default TabsNavigation;
