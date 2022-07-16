import React from "react";
import Slider from "../../ui/Slider";
import Navigation from "../../ui/Navigation";
import LeftSide from "../components/LeftSide";
import './index.scss'

function Home() {
  return (
    <div className="home_container">  
      <div className="home_container_navigation">  
        <Navigation />
      </div>

      <div className="home_container_mainContent"> 
        <div className="home_container_mainContent_leftSide">  
          <LeftSide />
        </div>
        <div className="home_container_mainContent_rightSide"> 
          <Slider /> 
        </div>
      </div>
    </div>
  );
}

export default Home;
