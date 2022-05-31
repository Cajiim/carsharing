import { React } from "react";
import Navigation from "../components/navigation";

/* import YandexMap from "../components/map";
import { Autocomplete } from "../components/Autocomplete"; */
import HeaderPage from "../components/HeaderPage";

import Tabs from "../components/Tabs";


function Category() {
  
  return (
    <div className="container__category">
      <div className="navigation">
        <Navigation />
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

export default  Category ;
