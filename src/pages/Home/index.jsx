import React, { useState } from "react";
import Slider from "../../components/Slider";
import Navigation from "../../components/Navigation";
import Content from "../../components/Content";
import "./index.scss";

const Home = () => {
  const [overflow, setOverflow] = useState(false);
  return (
    <div className="home-wrapper">
      <nav className="home-wrapper__navigation">
        <Navigation setOverflowHome={setOverflow}/>
      </nav>
      <main className="home-wrapper__main">
        <section className="home-wrapper__content">
          <Content overflow={overflow} />
        </section>
        <section className="home-wrapper__slider">
          <Slider />
        </section>
      </main>
    </div>
  );
};


export default Home;
