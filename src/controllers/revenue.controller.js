import React from "react";
import retriveData from "./../models/chart-model.js";
import VersusChart from "../views/versus-chart/versus-chart.view.js";

const RevenueController = () => {
  // En el controlador se obtienen los datos del modelo, y de ser necesario se
  // transforman, filtran o se pueden usar para motrar controles , por ejemplo
  // radio checkboxes para mostrar u ocultar cierta información
  const dataSet = retriveData("revenue");
  return <VersusChart dataSet={dataSet} title={"Revenue"} />;
};

export default RevenueController;
