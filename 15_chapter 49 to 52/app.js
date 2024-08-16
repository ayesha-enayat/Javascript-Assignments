document.getElementById("studentForm").addEventListener('submit',function(e){
    e.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var className = document.getElementById("class").value
    
    var table = document.getElementById("studentTable").querySelector("tbody")
    var newTr = table.insertRow();
    
    var td1 = newTr.insertCell(0)
    var td2 = newTr.insertCell(1)
    var td3 = newTr.insertCell(2)
    var td4 = newTr.insertCell(3)
    
    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = className
    td4.innerHTML =`<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`
    
    document.getElementById("studentForm").reset()
    })
    
    function deleteRow(button){
        var tr = button.parentNode.parentNode
        tr.parentNode.removeChild(tr)
    }