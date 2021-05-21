const margin = { top: 10, right: 20, bottom: 30, left: 50 };
const width = 500 - margin.left - margin.right;
const height = 420 - margin.top - margin.bottom;
const xLabelHeight = 50;

  d3.csv("https://tutorial-node-api-k8s-ng-the-engineer.cloud.okteto.net/skills", (data)=> {
  // Add X axis - Year
  const x = d3
    .scaleLinear()
    .domain([2013, 2022])
    .range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis - Exp
  const y = d3
    .scaleLinear()
    .domain([0, 10])
    .range([height, 0]);
  svg
    .append("g")
    .call(d3.axisLeft(y));

  // Add Z axis - Competency
  const z = d3
    .scaleLinear()
    .domain([0, 30])
    .range([4, 40]);

  svg
    .append("text")
    .attr("x", 230)
    .attr("y", 420)
    .style("text-anchor", "middle")
    .text("Last used year");

  svg
    .append("text")
    .attr("x", -200)
    .attr("y", -40)
    .attr("transform", "rotate(-90)")
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Year of experience");

  const myColor = d3
    .scaleOrdinal()
    .domain([
      "Javascript",
      "Frontend",
      "Backend",
      "Testing",
      "Database",
      "Programming Language",
      "Version Control",
      "mobile",
    ])
    .range(d3.schemeSet2);

  const tooltip = d3
    .select("#skills_bubble_plot")
    .append("div")
    .attr("class", "toolTip")

  const showToolTip = (dataPoint) => {
    tooltip
      .transition()
      .duration(200);
    tooltip
      .html(dataPoint.skill)
      .style("opacity", 1)
      .style("left", d3.mouse(this)[0] + 30 + "px")
      .style("top", d3.mouse(this)[1] + 30 + "px");
  };

  const moveToolTip = function () {
    tooltip
      .style("left", d3.mouse(this)[0] + 30 + "px")
      .style("top", d3.mouse(this)[1] + 30 + "px");
  };

  const hideToolTip = function () {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0);
  };

  // Draw data points
  svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "bubbles")
    .attr("cx", (dataPoint) => x(dataPoint.lastUse))
    .attr("cy", (dataPoint) => y(dataPoint.exp))
    .attr("r",  (dataPoint) => z(dataPoint.competency ** 3 / 100))
    .style("fill", (dataPoint) => myColor(dataPoint.category))
    .on("mouseover", showToolTip)
    .on("mousemove", moveToolTip)
    .on("mouseleave", hideToolTip);
});

// append the svg object to the body of the page
const svg = d3
  .select("#skills_bubble_plot")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom + xLabelHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");