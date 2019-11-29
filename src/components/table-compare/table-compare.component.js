import React from "react";
import "./table-compare.styles.scss";

const TableCompare = ({ dataSet }) => {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: dataSet.dataType,
    currency: "EUR",
    minimumFractionDigits: 0
  });
  const total = dataSet.data[0].qty + dataSet.data[1].qty;
  const pct0 = (dataSet.data[0].qty * 100) / total;
  const pct1 = (dataSet.data[1].qty * 100) / total;

  return (
    <div className="table-compare">
      <div className="left-compare">
        <p className="title-compare" style={{ color: dataSet.colors[1] }}>
          {dataSet.data[1].model}
        </p>
        <p className="content-compare">
          <span>{pct1}% </span>
          <span className="content-compare-qty">
            {formatter.format(dataSet.data[1].qty)}
          </span>
        </p>
      </div>
      <div className="right-compare">
        <p className="title-compare" style={{ color: dataSet.colors[0] }}>
          {dataSet.data[0].model}
        </p>
        <p className="content-compare">
          <span>{pct0}% </span>
          <span className="content-compare-qty">
            {formatter.format(dataSet.data[0].qty)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TableCompare;
