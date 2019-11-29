// Los datos pueden surgir de otro origen, como un api, o un csv. En este ejemplo se definen variables json

const data = {
  revenue: {
    title: "Revenue",
    colors: ["#85d042", "#36660d"],
    dataType: "currency",
    data: [
      { model: "Smartphone", qty: 80000 },
      { model: "Tablet", qty: 120000 }
    ]
  },
  impresions: {
    title: "Impresions",
    colors: ["#72c3e6", "#6dc9e3"],
    dataType: "decimal",
    data: [
      { model: "Smartphone", qty: 30000000 },
      { model: "Tablet", qty: 20000000 }
    ]
  },
  visits: {
    title: "Visits",
    colors: ["#b9571f", "#F1BD30"],
    dataType: "decimal",
    data: [
      { model: "Smartphone", qty: 120000000 },
      { model: "Tablet", qty: 480000000 }
    ]
  }
};

const retriveData = dataReq => data[dataReq];

export default retriveData;
