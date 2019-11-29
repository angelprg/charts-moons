import React, { useState, useEffect } from "react";
import rd3 from "react-d3-library";
import PieChart from "../../components/pie-chart/pie-chart.component.js";
import TableCompare from "../../components/table-compare/table-compare.component.js";

import "./versus-chart.styles.scss";

const RD3Component = rd3.Component;

const VersusChart = ({ dataSet, title }) => {
  const [d3, setD3] = useState(null);
  useEffect(() => setD3(PieChart(dataSet)), [dataSet]);

  return (
    <div className="text-center">
      <h1 className="display-4"> {title} </h1>
      <RD3Component data={d3} />
      <TableCompare dataSet={dataSet} />
    </div>
  );
};

export default VersusChart;
