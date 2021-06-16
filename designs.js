//stores the initial color
var color = document.querySelector("#colorPicker").value;
//creates a variable for the sizePicker form
var form = document.querySelector("#sizePicker");
//creates a variable for the table, where the grid goes
var table = document.querySelector("#pixelCanvas");

//defines a function that makes a grid
function makeGrid() {
    //stores the grid in a variable
    tbody = document.querySelector("tbody");
    //remove the old grid and replace it with a new, blank one
    if (tbody !== null) {
        tbody.remove();
    }
    //gets the user's height input
    var height = document.querySelector("#inputHeight").value;
    //gets the user's width input
    var width = document.querySelector("#inputWidth").value;
    /*creates one row * the user's inputed number of rows (height)
    For every row, create one cell * the user's inputed number of cells (width)
    */
    for (var x = 0; x < height; x ++) {
        var row = table.insertRow();
        for (var w = 0; w < width; w ++) {
            var cell = row.insertCell();
        }
    }
}

form.addEventListener("submit", function StopDefault(event) {
    //prevents the default action that reloads the page when the form is submitted.
    event.preventDefault();
    //calls the function that makes the grid
    makeGrid()
});

//when the table(grid) is clicked
table.addEventListener("click", function (event) {
    //assigns the variable "color" to the user's selection
    var color = document.querySelector("#colorPicker").value;
    //changes the clicked cell's color based on the variable
    event.target.style.backgroundColor = color;
});


