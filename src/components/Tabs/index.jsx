import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import ModelContainer from "../ModelContainer";
import Additionally from "../Additionally";
import RightSideBlockStory from "../common/RightSideBlockStory";
import Vector from "../../assets/svg/Vector.svg";
import Map from "../Map";
import FinalCart from "../common/FinalCart";
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
import style from "./index.scss";

const cn = classNames.bind(style);

const Tabs = () => {
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
      <div className="container_tabs_navigation">
        <nav className="">
          <ul className="container_tabs_navigation_category clear">
            <li
              className={cn(
                "container_tabs_navigation_category_tab margin-left",
                {
                  container_tabs_navigation_category_tab_active:
                    tabIndex === "1",
                  container_tabs_navigation_category_tab_complete:
                    tabIndex !== "1",
                }
              )}
              onClick={(e) => {
                handleClickTab(e.target.id);
                handlClickLocation();
              }}
              id="1"
            >
              <span
                className="container_tabs_navigation_category_tabName"
                id="1"
              >
                Местоположение
              </span>
              <img
                src={Vector}
                alt="Vector"
                className="container_tabs_navigation_category_img"
              />
            </li>

            <li
              className={cn("container_tabs_navigation_category_tab", {
                container_tabs_navigation_category_tab_active: tabIndex === "2",
                container_tabs_navigation_category_tab_disabled: tabIndex < "2",
                container_tabs_navigation_category_tab_complete: tabIndex > "2",
              })}
              onClick={(e) => {
                handleClickTab(e.target.id);
                handlClickModel();
              }}
              id="2"
            >
              <span
                className="container_tabs_navigation_category_tabName"
                id="2"
              >
                Модель
              </span>
              <img
                src={Vector}
                alt="Vector"
                className="container_tabs_navigation_category_img"
              />
            </li>

            <li
              className={cn("container_tabs_navigation_category_tab", {
                container_tabs_navigation_category_tab_active: tabIndex === "3",
                container_tabs_navigation_category_tab_disabled: tabIndex < "3",
                container_tabs_navigation_category_tab_complete: tabIndex > "3",
              })}
              onClick={(e) => {
                handleClickTab(e.target.id);
                handlClickDetails();
              }}
              id="3"
            >
              <span
                className="container_tabs_navigation_category_tabName"
                id="3"
              >
                Дополнительно
              </span>
              <img
                src={Vector}
                alt="Vector"
                className="container_tabs_navigation_category_img"
              />
            </li>

            <li
              className={cn("container_tabs_navigation_category_tab", {
                container_tabs_navigation_category_tab_active: tabIndex === "4",
                container_tabs_navigation_category_tab_disabled:
                  tabIndex !== "4",
              })}
              onClick={(e) => handleClickTab(e.target.id)}
              id="4"
            >
              <span
                className="container_tabs_navigation_category_tabName"
                id="4"
              >
                Итого
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container_tabs_tabs-maincontent">
        <div className="container_tabs_tabs-maincontent_leftContent">
          <div
            className={cn(
              "container_tabs_tabs-maincontent_leftContent_content-tabs",
              {
                "container_tabs_tabs-maincontent_leftContent_content-tabs_active":
                  tabIndex === "1",
              }
            )}
          >
            <Map />
          </div>

          <div
            className={cn(
              "container_tabs_tabs-maincontent_leftContent_content-tabs",
              {
                "container_tabs_tabs-maincontent_leftContent_content-tabs_active":
                  tabIndex === "2",
              }
            )}
          >
            <ModelContainer />
          </div>

          <div
            className={cn(
              "container_tabs_tabs-maincontent_leftContent_content-tabs",
              {
                "container_tabs_tabs-maincontent_leftContent_content-tabs_active":
                  tabIndex === "3",
              }
            )}
          >
            <Additionally />
          </div>

          <div
            className={cn(
              "container_tabs_tabs-maincontent_leftContent_content-tabs",
              {
                "container_tabs_tabs-maincontent_leftContent_content-tabs_active":
                  tabIndex === "4",
              }
            )}
          >
            <FinalCart />
          </div>
        </div>
        <div className="container_tabs_tabs-maincontent_rightContent">
          <RightSideBlockStory />
        </div>
      </div>
    </div>
  );
}
export default Tabs;
