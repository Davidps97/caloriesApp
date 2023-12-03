import React from "react";
import { Slider } from "antd";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="dynamic-stats-container">
        <div id="protein" className="stats-containers">
          <div className="dynamic-percent">100 %</div>
        </div>
        <div id="carbs" className="stats-containers">
          <div className="dynamic-percent">100 %</div>
        </div>
        <div id="fat" className="stats-containers">
          <div className="dynamic-percent">100 %</div>
        </div>
      </div>
      <div className="stats-container-data">
        <div className="gr-container">
          <div className="gr-label">Protein</div>
          <div className="gr-value">200gr</div>
        </div>
        <div className="gr-container">
          <div className="gr-label">Carbs</div>
          <div className="gr-value">500gr</div>
        </div>
        <div className="gr-container">
          <div className="gr-label">Fat</div>
          <div className="gr-value">1000kcal</div>
        </div>
      </div>
      <div className="insert-data-container" style={{ width: "70%" }}>
        <div className="protein-data">
          <Slider min={0} max={20} />
        </div>
        <div className="carbs-data">
          <Slider min={0} max={20} />
        </div>
        <div className="fat-data">
          <Slider min={0} max={20} />
        </div>
      </div>
    </div>
  );
}

export default Home;
