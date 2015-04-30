/*
JS to change the color of the row based on patient condition
*/
var table;
var row;
var cell;
var priority;


//Color Rows in which the survey is listed as Critical or Moderate
function colorRow() {

    var status;
    table = document.getElementById("tableID");
    row = table.getElementsByTagName("tr");
    cell = table.getElementsByTagName("td");
    
    for (var i = 0; i < cell.length; i++)
    {
        if(cell[i].innerText == "Critical")
        {
            cell[i].parentNode.style.backgroundColor = "red";
        }
        if (cell[i].innerText == "Moderate")
        {
            cell[i].parentNode.style.backgroundColor = "yellow";
        }
    }
}



function colorPriority() {

    priority = document.getElementById("priority");
    
    if (priority.innerText == "Critical")
    {
        priority.style.backgroundColor = "red";
    }
    if (priority.innerText == "Moderate")
    {
        priority.style.backgroundColor = "yellow";
    }

}