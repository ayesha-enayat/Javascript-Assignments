       //question1

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    //Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display form data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPassword').textContent = password;

    // Show the display data section
    document.getElementById('displayData').classList.remove('hidden');

    document.getElementById("signupForm").reset();

});


//   -------           question2 --------

// document.getElementById('readMoreButton').addEventListener('click', function() {
//     var fullDescription = document.getElementById('fullDescription');
    
//     if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
//         fullDescription.style.display = 'block';
//         this.textContent = 'Read Less';
//     } else {
//         fullDescription.style.display = 'none';
//         this.textContent = 'Read More';
//     }
// });


//                    question 3

// document.getElementById("studentForm").addEventListener('submit',function(e){
//     e.preventDefault();
//     var name=document.getElementById("name").value;
//     var age=document.getElementById("age").value;
//     var className=document.getElementById("class").value;
    
//     var table=document.getElementById("studentTable").querySelector("tbody");
//     var tr=table.insertRow();
    
//     var td1=tr.insertCell(0);
//     var td2=tr.insertCell(1);
//     var td3=tr.insertCell(2);
//     var td4=tr.insertCell(3);

//     td1.innerHTML=name;
//     td2.innerHTML=age;
//     td3.innerHTML=className;
//     td4.innerHTML=`<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;

//     document.getElementById("studentForm").reset();
// })
//     function deleteRow(button){
//         var tr=button.parentNode.parentNode;
//         tr.parentNode.removeChild(tr);
//     }

//    function editRow(button) {
//     var tr = button.parentNode.parentNode;

//     var index = tr.rowIndex - 1;
//     var name = tr.cells[0].innerHTML;
//     var age = tr.cells[1].innerHTML;
//     var className = tr.cells[2].innerHTML;

//     document.getElementById("editIndex").value = index;
//     document.getElementById("editName").value = name;
//     document.getElementById("editAge").value = age;
//     document.getElementById("editClass").value = className;

//     document.getElementById("editFormContent").classList.remove("hidden");
// }
// document.getElementById("editStudentForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     var index = document.getElementById("editIndex").value;
//     var name = document.getElementById("editName").value;
//     var age = document.getElementById("editAge").value;
//     var className = document.getElementById("editClass").value;

//     var table = document.getElementById("studentTable").querySelector("tbody");
//     var tr = table.rows[index];
// ;
//     tr.cells[0].innerHTML = name;
//     tr.cells[1].innerHTML = age;
//     tr.cells[2].innerHTML = className;

//     document.getElementById("editFormContent").classList.add("hidden");
// })
