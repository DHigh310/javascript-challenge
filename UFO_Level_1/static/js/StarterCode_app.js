// from data.js
var tableData = data;

// YOUR CODE HERE!
// Define a function to append table based on reports data
function appendTable(report) {
    var tbody = d3.select("tbody");

    // add a new row
    var row = tbody.append("tr");

    // for each key value pair in an object
    Object.entries(report).forEach(([key, value]) => {

        // add a new cell
        var cell = row.append("td");
        cell.text(value);

        // set a class for comments to align text differently
        if (key === "comments") {
            cell.attr("class", "record-comments")
        }
    });
}
// Display the entire dataset as default
tableData.forEach(appendTable);

// Select the submit button
var submit = d3.select("#filter-btn");

// Click event of datetime filter
submit.on("click", function() {

// Remove existing table
   d3.select("tbody").html("");

// Prevent the page from refreshing
   d3.event.preventDefault();

// Get the value property of the input element
    var dateTime = d3.select("#datetime").property("value");
   console.log(dateTime);

// Filter reports
   var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData)

// Display the filtered dataset
    filteredData.forEach(appendTable);

 });