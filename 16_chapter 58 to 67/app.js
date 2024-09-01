// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element.
var allChildNodes = mainContent.childNodes;

// for loop to iterate over NodeList
for (var i = 0; i < allChildNodes.length; i++) {
    console.log(allChildNodes[i]);
}

// iii. Get all elements of class “render” and show their innerHTML
// in browser.

var render=document.getElementsByClassName("render");
for(var i=0;i<render.length;i++ ){
    console.log(render[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.
var first_name=document.getElementById("first-name").value="Ayesha";
var last_name=document.getElementById("last-name").value="Enayat";
var email=document.getElementById("email").value="ayesha@gmail.com";
console.log(first_name);
console.log(last_name);
console.log(email);

// i. What is node type of element having id “form-content”.
console.log(document.getElementById("form-content").nodeType);

//ii. Show node type of element having id “lastName” and its child node.
console.log(document.getElementById("lastName").nodeType);
console.log(document.getElementById("lastName").childNodes[0].nodeType);

// iii. Update child node of element having id “lastName”.
var lastName=document.getElementById("lastName").childNodes[0].nodeValue="Bank pakistan";
console.log(lastName);


//iv. Get First and last child of id “main-content”.
console.log(mainContent.firstChild.nextSibling);

console.log(mainContent.lastChild.previousSibling);

// v. Get next and previous siblings of id “lastName”.
console.log(lastName.nextSibling);
console.log(lastName.previousSibling);

//vi. Get parent node and node type of element having id “email”
console.log(document.getElementById("email").parentNode);
console.log(document.getElementById("email").nodeType);






