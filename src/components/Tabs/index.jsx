import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import ModelContainer from "../ModelContainer";
import Additionally from "../Additionally";
import RightSideBlockStory from "../Common/RightSideBlockStory";
import Map from "../Map";
import FinalCart from "../Common/FinalCart";
import TabsNavigation from "../TabsNavigation";
import style from "./index.scss";

const cn = classNames.bind(style);

const Tabs = () => {
  const { tabIndex } = useSelector(({ tableIndex }) => tableIndex);
  return (
    <div className="tabs">
      <TabsNavigation />
      <div className="tabs__container">
        <div className="tabs__mainContent">
          <div
            className={cn("tabs__lining", {
              tabs__lining_active: tabIndex === "1",
            })}
          >
            <Map />
          </div>
          <div
            className={cn("tabs__lining", {
              tabs__lining_active: tabIndex === "2",
            })}
          >
            <ModelContainer />
          </div>
          <div
            className={cn("tabs__lining", {
              tabs__lining_active: tabIndex === "3",
            })}
          >
            <Additionally />
          </div>
          <div
            className={cn("tabs__lining", {
              tabs__lining_active: tabIndex === "4",
            })}
          >
            <FinalCart />
          </div>
        </div>
        <div className="tabs__orderBlock">
          <RightSideBlockStory />
        </div>
      </div>
    </div>
  );
};
export default Tabs;
