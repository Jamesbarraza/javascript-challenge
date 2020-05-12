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
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {
    empty.html("")
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach((filteredInfo) => {
        var row = tbody.append("tr");
        Object.entries(filteredInfo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}