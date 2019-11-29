import React, { useState } from "react";
import retriveData from "./../models/chart-model";
import RevenueView from "../views/revenue/revenue.component";
import PieChart from "../components/pie-chart/pie-chart.component";

const RevenueController = () => {
  const dataSet = retriveData("revenue");
  //PieChart(dataSet);
  console.log(dataSet);
  return (
    <div>
      <RevenueView />
    </div>
  );
};

export default RevenueController;
