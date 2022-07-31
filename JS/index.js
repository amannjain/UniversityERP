// THIS FUNCTION IS FOR PRINTING DATE ON GATEPASS
const d = new Date();
const currdate = d.toDateString();
document.getElementById("curr_date").innerHTML = currdate;

// THIS FUNCTION IS TO APPEND GATEPASS DETAILS IN THE HISTORY
function applygatepass(){
    var table = document.getElementById("gatepass_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = currdate;
    cell2.innerHTML = document.getElementById("from_date").value;
    cell3.innerHTML = document.getElementById("to_date").value;
    cell4.innerHTML = "Pending";
}

function applycheckout(){
    if(confirm("Are you sure you want to check out") == true){
        window.alert("Checkout Request Successfully Registered");
    };
}