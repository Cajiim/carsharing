import { React, useState } from "react";
import Navigation from "../../components/Navigation";
import HeaderPage from "../../components/Common/HeaderPage";
import Tabs from "../../components/Tabs";
import "./index.scss";

const Category = () => {
  const [overflowActive, setOverflowActive] = useState(true);
  return (
    <div className="category">
      <nav>
        <Navigation overflow={overflowActive} setOverflow={setOverflowActive} />
      </nav>
      <main className="category__content">
        <HeaderPage />
        <div className="category__tabs">
          <Tabs />
        </div>
      </main>
    </div>
  );
};

export default Category;
