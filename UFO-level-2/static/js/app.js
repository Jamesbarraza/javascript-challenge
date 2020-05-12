// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!
// Use d3 to update each cell's values with ufo data.

tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button & Select the form
var button = d3.select("#filter-btn");
var form = d3.select("#form");
var empty = d3.select("tbody");
// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("change", runEnter);

// Create the function to run for both events
function runEnter() {
    empty.html("")
    d3.event.preventDefault();
    var inputField = d3.selectAll("input").nodes();
    var filters = {}
    inputField.forEach(node => {
      if(node.value.length > 0) {
        filters[node.id] = node.value
        }
    })
    var filteredData = tableData
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter((row) => {
        return row[key] === value
      })
    })
    console.log(filteredData);    

    filteredData.forEach((filteredInfo) => {
        var row = tbody.append("tr");
        Object.entries(filteredInfo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}