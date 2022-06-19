import { React,  useState } from "react";
import Navigation from "../components/navigation";

import HeaderPage from "../components/HeaderPage";

import Tabs from "../components/Tabs";


function Category() {
  const [overflowActive, setOverflowActive] = useState(true);

  return (
    <div className="container__category">
      <div className="navigation">
        <Navigation overflow={overflowActive}  setOverflow={setOverflowActive}  /> 
      </div>
      <div className="mainContent__page">
        <HeaderPage />
        <div className="mainContent__page_tabs">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default Category;
