
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

var counter = 0;

function increase(){
    counter++
    // console.log(counter)
    document.getElementById('counter').innerHTML = counter
}
function decrease(){
    counter--
    document.getElementById('counter').innerHTML = counter
}
