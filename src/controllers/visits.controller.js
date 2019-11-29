import React from "react";
import retriveData from "./../models/chart-model";
import VisitsView from "../views/visits/visits.component";

const VisitsController = () => {
  // En el controlador se obtienen los datos del modelo, y de ser necesario se
  // transforman, filtran o se pueden usar para motrar controles , por ejemplo
  // radio checkboxes para mostrar u ocultar cierta información
  const dataSet = retriveData("visits");
  return <VisitsView dataSet={dataSet} />;
};

export default VisitsController;
