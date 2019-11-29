import React from "react";
import retriveData from "./../models/chart-model.js";
import VersusChart from "../views/versus-chart/versus-chart.view.js";

const ImpresionsController = () => {
  // En el controlador se obtienen los datos del modelo, y de ser necesario se
  // transforman, filtran o se pueden usar para motrar controles , por ejemplo
  // radio checkboxes para mostrar u ocultar cierta información
  const dataSet = retriveData("impresions");
  return <VersusChart dataSet={dataSet} title={"Impresions"} />;
};

export default ImpresionsController;
