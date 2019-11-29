import React from "react";
import retriveData from "./../models/chart-model";
import ImpresionsView from "../views/impresions/impresions.component";
import PieChart from "./pie-chart.controller";

const ImpresionsController = () => {
  const dataSet = retriveData("impresions");
  //PieChart(dataSet);
  //console.log(dataSet);
  return (
    <div>
      <ImpresionsView />;
    </div>
  );
};

export default ImpresionsController;
