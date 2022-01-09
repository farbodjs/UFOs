// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");