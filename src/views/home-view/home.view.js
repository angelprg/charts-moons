import React from "react";
import VersusChart from "../versus-chart/versus-chart.view.js";
import retriveData from "../../models/chart-model";

import "./home.styles.scss";

const Home = () => {
  const revenueDataSet = retriveData("revenue");
  const impresionsDataSet = retriveData("impresions");
  const visitsDataSet = retriveData("visits");
  return (
    <div className="text-center">
      <h1 className="display-4"> Dashboard </h1>
      <div class="dashboard">
        <VersusChart dataSet={revenueDataSet} />
        <VersusChart dataSet={impresionsDataSet} />
        <VersusChart dataSet={visitsDataSet} />
      </div>
    </div>
  );
};

export default Home;
