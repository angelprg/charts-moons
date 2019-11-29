import React from "react";

const TableCompare = ({ dataSet }) => {
  return (
    <div class="table-compare">
      <div class="left-compare">
        <p class="title-compare">{dataSet.data[1].title}</p>
        <p class="content-compare">
          <span>{dataSet.data[1].pct}</span>
          <span>{dataSet.data[1].pct}</span>
        </p>
      </div>
      <div class="right-compare">
        <p class="title-compare">{dataSet.data[1].title}</p>
        <p class="content-compare">
          <span>{dataSet.data[1].pct}</span>
          <span>{dataSet.data[1].pct}</span>
        </p>
      </div>
    </div>
  );
};

export default TableCompare;
