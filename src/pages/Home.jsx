import React from "react";

import Slider from "../components/slider";

import Navigation from "../components/navigation";
import LeftSide from "../components/leftSide";
/* import RightSide from '../components/rightSide' */
/* import Overflow from '../components/overflow';  */

function Home() {
  return (
    <div className="container">
      <div className="navigation">
        <Navigation />
      </div>

      <div className="mainContent">
        <div className="leftSide">
          <LeftSide />
        </div>
        <div className="rightSide">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export { Home };
