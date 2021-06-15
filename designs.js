var color = document.querySelector("#colorPicker").value;
var form = document.querySelector("#sizePicker");
var table = document.querySelector("#pixelCanvas");

function makeGrid() {
    console.log(color);
    tbody = document.querySelector("tbody");
    if (tbody !== null) {
        tbody.remove();
    }
    var height = document.querySelector("#inputHeight").value;
    var width = document.querySelector("#inputWidth").value;
    for (var x = 0; x < height; x ++) {
        var row = table.insertRow();
        for (var w = 0; w < width; w ++) {
            var cell = row.insertCell();
        }
    }
}


form.addEventListener("submit", function StopDefault(event) {
    event.preventDefault();
    makeGrid()
});

table.addEventListener("click", function (event) {
    var color = document.querySelector("#colorPicker").value;
    event.target.style.backgroundColor = color;
});


