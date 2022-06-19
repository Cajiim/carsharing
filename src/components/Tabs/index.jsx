import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import ModelContainer from "../ModelContainer";
import Additionally from "../Additionally";
import RightSideBlockStory from "../RightSideBlockStory";
import Vector from "../../assets/svg/Vector.svg";
import Map from "../map";
import FinalCart from "../FinalCart";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";

import {
  deleteModelFromCart,
  deleteArendTime,
  deleteCheckedFuel,
  deleteCheckedBabyChair,
  deleteCheckedRightHand,
  deleteClass,
  deleteColor,
  deleteDurationArend,
  deleteDurationArendTwo,
} from "../../redux/cart/reducerFinalOrder";

function Tabs() {
  const dispatch = useDispatch();
  const handleClickTab = (id) => {
    dispatch(setTabIndex(id));
  };
  const handlClickLocation = () => {
    dispatch(deleteModelFromCart());
    dispatch(deleteArendTime());
    dispatch(deleteCheckedFuel());
    dispatch(deleteCheckedBabyChair());
    dispatch(deleteCheckedRightHand());
    dispatch(deleteClass());
    dispatch(deleteColor());
    dispatch(deleteDurationArend());
    dispatch(deleteDurationArendTwo());
  };
  const handlClickModel = () => {
    dispatch(deleteArendTime());
    dispatch(deleteCheckedFuel());
    dispatch(deleteCheckedBabyChair());
    dispatch(deleteCheckedRightHand());
    dispatch(deleteClass());
    dispatch(deleteColor());
    dispatch(deleteDurationArend());
    dispatch(deleteDurationArendTwo());
  };

  const handlClickDetails = () => {};

  const { tabIndex } = useSelector(({ tableIndex }) => tableIndex);

  return (
    <div className="container_tabs">
      <div className="block-tabs">
        <nav className="">
          <ul className="navigation__category clear">
            <li
              className={
                tabIndex === "1"
                  ? "margin-left active"
                  : " margin-left complete"
              }
            >
              <span
                className="nav_category__type"
                id="1"
                onClick={(e) => {
                  handleClickTab(e.target.id);
                  handlClickLocation();
                }}
                onKeyDown={() => {
                  handlClickLocation();
                }}
                role="button"
                tabIndex={0}
              >
                Местоположение
              </span>
              <img
                src={Vector}
                alt="Vector"
                className="navigation__category_img"
              />
            </li>
            <li
              className={
                tabIndex === "2"
                  ? "active"
                  : tabIndex < 2
                  ? "disabled"
                  : "complete"
              }
            >
              <span
                className="nav_category__type"
                id="2"
                onClick={(e) => {
                  handleClickTab(e.target.id);
                  handlClickModel();
                }}
                onKeyDown={() => {
                  handlClickModel();
                }}
                role="button"
                tabIndex={0}
              >
                Модель
              </span>
              <img
                src={Vector}
                alt="Vector"
                className="navigation__category_img"
              />
            </li>
            <li
              className={
                tabIndex === "3"
                  ? "active"
                  : tabIndex < 3
                  ? "disabled"
                  : "complete"
              }
            >
              <span
                className="nav_category__type"
                id="3"
                onClick={(e) => {
                  handleClickTab(e.target.id);
                  handlClickDetails();
                }}
                onKeyDown={() => {
                  handlClickDetails();
                }}
                role="button"
                tabIndex={0}
              >
                Дополнительно
              </span>
              <img
                src={Vector}
                alt="Vector"
                className="navigation__category_img"
              />
            </li>
            <li className={tabIndex === "4" ? "active" : "disabled"}>
              <span
                className="nav_category__type"
                id="4"
                onClick={(e) => handleClickTab(e.target.id)}
                onKeyDown={() => {
                  handleClickTab();
                }}
                role="button"
                tabIndex={0}
              >
                Итого
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="tabs-maincontent">
        <div className="tabs_left_content">
          <div
            className={
              tabIndex === "1" ? "active-tabs-content" : "content-tabs"
            }
          >
            <Map />
          </div>

          <div
            className={
              tabIndex === "2"
                ? "active-tabs-content active-tabs-content_model_cart"
                : "content-tabs"
            }
          >
            <ModelContainer />
          </div>

          <div
            className={
              tabIndex === "3" ? "active-tabs-content" : "content-tabs"
            }
          >
            <Additionally />
          </div>

          <div
            className={
              tabIndex === "4" ? "active-tabs-content" : "content-tabs"
            }
          >
            <FinalCart />
          </div>
        </div>
        <div className="tabs_right_content">
          <RightSideBlockStory />
        </div>
      </div>
    </div>
  );
}
export default Tabs;
