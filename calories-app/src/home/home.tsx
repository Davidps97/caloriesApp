import React from "react";
import { Card, Row, Col } from "antd";
import "./home.css";
import Header from "../header/header";

function Home() {
  return (
    <div className="container">
      <Header />
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
      <div className="meals-container">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={12} lg={12}>
            <Card
              title="Today Dish"
              extra={<div className="dynamic-percent">Lentils</div>}
              style={{ backgroundColor: "#fafafa" }}
            >
              <div className="meal-description">
                <img
                  alt="Meal 1"
                  src="/images/lentils.jpg"
                  className="meal-image"
                  style={{ width: "30%", objectFit: "cover" }}
                />
                <p>
                  Lentils are small, round legumes cultivated in various regions
                  around the world.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
