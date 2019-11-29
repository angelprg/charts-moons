import * as d3 from "d3";
import "./pie-chart.styles.scss";

const PieChart = dataSet => {
  // Para dar formato a los números
  const formatter = new Intl.NumberFormat("es-ES", {
    style: dataSet.dataType,
    currency: "EUR",
    minimumFractionDigits: 0
  });

  var node = document.createElement("div");

  // tamaño y márgenes
  var margin_base = 0;
  var size_base = 200;
  var margin = {
      top: margin_base,
      right: margin_base,
      bottom: margin_base,
      left: margin_base
    },
    width = size_base - margin.right - margin.left,
    height = size_base - margin.top - margin.bottom,
    radius = width / 2;

  // Rango de colores
  var color = d3.scaleOrdinal().range(dataSet.colors);

  // Propiedades de los arcos
  var arc2 = d3
    .arc()
    .outerRadius(radius * 1)
    .innerRadius(radius * 0.9);

  var pie = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.qty;
    });

  // Se definen las características de la gráfica y se asigna el dataSet
  var svg = d3
    .select(node)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // Se insertan y agrupan los elementos en base al dataSet
  var g = svg
    .selectAll(".arc2")
    .data(pie(dataSet.data))
    .enter()
    .append("g")
    .attr("class", "arc2");

  g.append("path")
    .attr("d", arc2)
    .style("fill", function(d) {
      return color(d.data.model);
    });

  // Se agregan las etiquetas de título y la cantidad
  svg
    .selectAll("g")
    .append("text")
    .attr("text-anchor", "middle")
    .attr("class", "texto_central")
    .attr("transform", "translate(0, -15)")
    .text(dataSet.title);

  svg
    .selectAll("g")
    .append("text")
    .attr("text-anchor", "middle")
    .attr("class", "texto_qty")
    .attr("transform", "translate(0, 10)")
    .text(
      //Se suman todas las cantidades del set y se da formato
      formatter.format(dataSet.data.reduce((sum, cur) => sum + cur.qty, 0))
    );
  return node;
};

export default PieChart;
