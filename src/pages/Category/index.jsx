import { React, useState } from "react";
import Navigation from "../../components/Navigation";
import HeaderPage from "../../components/common/HeaderPage";
import Tabs from "../../components/Tabs";
import "./index.scss";

const Category = () => {
  const [overflowActive, setOverflowActive] = useState(true);

  return (
    <div className="container_category">
      <div>
        <Navigation overflow={overflowActive} setOverflow={setOverflowActive} />
      </div>
      <div className="container_category_mainContent_page">
        <HeaderPage />
        <div className="container_category_mainContent_page_tabs">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Category;
