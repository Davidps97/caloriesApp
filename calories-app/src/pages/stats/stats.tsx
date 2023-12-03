import React from "react";
import { Progress, Space } from "antd";
import Header from "../../header/header";
import "./stats.css";

const Stats: React.FC = () => (
  <div>
    <Header></Header>
    <div className="container-main">
      <div className="calories-stats"></div>
      <p>Calories stats</p>
      <Progress percent={30} />
      <Progress percent={50} />
      <Progress percent={70} />
      <Progress percent={100} />
      <Progress percent={50} />
      <div className="water-stats">
        <p>Water stats</p>
        <Space wrap>
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
          <Progress type="circle" percent={25} />
        </Space>
      </div>
    </div>
  </div>
);

export default Stats;
