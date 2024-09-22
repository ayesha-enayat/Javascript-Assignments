/*1. Suppose You have an array of object
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items; */


var itemsArray = [
{name:" juice",price:"50", quantity:"3"},
{name:"cookie",price:"30", quantity:"9"},
{name:"shirt",price:"880", quantity:"1"},
{name:"pen",price:"100", quantity:"2"}];

var sum=0;
for(var key in  itemsArray){
    var item = itemsArray[key];
    var price = item.price*item.quantity;
    sum += price;
    console.log(item.name + " total price is " + price);
   
}
console.log("Total price of all items is " + sum);


/* 2. Create an object with properties name, email, password, age,
gender, city, country.
Check if age and country properties exist in object or not.
Also check firstName and lastName properties in object. */

var personalInfo={
    name:"Ayesha",
    email:"ayesha@gmail.com",
    password:"1234",
    age:16,
    gender:"female",
    city:"Karachi",
    country:"Pakistan"
}
console.log("age" in personalInfo);
console.log("country" in personalInfo);
console.log("firstName" in personalInfo);
console.log("lastName" in personalInfo);


/*3. Create a constructor function with some properties. Now
create multiple records using the constructor. */

function Person(firstName,lastName,age,jobTitle){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.jobTitle=jobTitle;
}
// Creating multiple records
var person1 = new Person("Ayesha", "Enayat", 30, "Engineer");
var person2 = new Person("Aqsa", "khan", 25, "Designer");
var person3 = new Person("Umaima", "waheed", 40, "Manager");


console.log(person1);
console.log(person2);
console.log(person3);



/*4. Suppose you want to check population of your area, their
educations and professions.
Create a constructor function which holds following
properties:
Name, gender, address, education, profession,
Enter all records one by one.
Hint:

 use select box for education and profession,
 use radio box for gender

Bonus : use can use localStorage to save records. */


// Constructor function for population record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save record to localStorage
function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    records.push(record);
    localStorage.setItem("populationRecords", JSON.stringify(records));
    displayRecords();
}

// Function to display records from localStorage
function displayRecords() {
    let recordsList = document.getElementById("recordsList");
    let records = JSON.parse(localStorage.getItem("populationRecords")) || [];

    recordsList.innerHTML = "";
    records.forEach((record, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
        recordsList.appendChild(listItem);
    });
}

// Event listener for form submission
document.getElementById("populationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;

    let newRecord = new PopulationRecord(name, gender, address, education, profession);
    saveRecord(newRecord);

    // Clear the form after submission
    document.getElementById("populationForm").reset();
});

// Display saved records on page load
window.onload = displayRecords;
