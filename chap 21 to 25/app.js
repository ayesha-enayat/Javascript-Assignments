// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName=prompt("Enter your first name : ");
// var LastName=prompt("Enter your Last name : ");
// var fullName=firstName+ " " +LastName;
// document.write("Good morning " + fullName +"</br>");
// document.write("</br>");

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of userinput in your browser

// var favMobileModel=prompt("Enter your favourite mobile phone model : ");
// document.write("My favourite phone is : " + favMobileModel + "</br>");
// document.write("Length of string is " + favMobileModel.length + "</br>");
// document.write("</br>");

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var countryName="Pakistan";
// document.write("String :" + countryName + "</br>");
// document.write("Index of n is " + countryName.indexOf("n")+ "</br>");
// document.write("</br>");

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var greet="Hello world";
// document.write("String : "+ greet +"</br>");
// document.write("Last index of l is " + greet.lastIndexOf("l")+ "</br>");
// document.write("</br>");

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// document.write("String: " + countryName +"</br>");
// document.write("Character at index 3 : " + countryName.charAt(3)+ "</br>");
// document.write("</br>");

//6. Repeat Q1 using( string concat() method.

// document.write("Good Morning " + firstName.concat(" ",LastName) + "</br>");
// document.write("</br>");

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city="Hyderabad";
// document.write("City: " + city +"</br>");
// document.write("After Replacement : " + city.replace("Hyder","Islam") +"</br>");
// document.write("</br>");

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replaceAll("and","&")+"</br>");
// document.write("</br>");

//9. Write a program that converts a string “472” to a number  472. Display the values & types in your browser.

// var value="427";
// document.write("Value: "+ value + "</br>");
// document.write("Type : "+ typeof(value) + "</br>");
// document.write("Value: " + Number(value) + "</br>");
// document.write("Type : " + (typeof Number(value)) + "</br>");
// document.write("</br>");

//10. Write a program that takes user input. Convert and show the input in capital letters.

// var userInput=prompt("Enter any dry fruit");
// document.write("User Input : " + userInput +"</br>");
// document.write("Upper Case : " + userInput.toUpperCase() +"</br>");
// document.write("</br>");

//11. Write a program that takes user input. Convert and show the input in title case.

// var userName = prompt("Enter your name : ");
// var firstChar = userName.slice(0,1);
// var otherChar = userName.slice(1);
// var title = firstChar.toUpperCase() + otherChar.toLowerCase();
// document.write("User input: " + userName + "<br>");
// document.write("Title case : " + title);

// //12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num=35.36;
// document.write("Number : " + num + "</br>");
// num=num.toString();
// document.write("Result : " + num.replace(".","")+ "</br>");
// document.write("</br>");

//13. Write a program to take user input and store username in a variable. If the username contains any special symbolamong [@ . , !], prompt the user to enter a valid username.

// var username=prompt("Enter your name : ");
// for(i=0;i<username.length;i++){
//     charValue = username[i].charCodeAt();
//         if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
//             alert("Please enter a valid username");
//         }
//     } 

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in anarray. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var inputItem=prompt("Welcome to ABC bakery what do you want sir/maam ?");
// inputItem=inputItem.toLowerCase();
// var global=false;
// for(i=0;i<A.length;i++){
//     if(A[i] === inputItem){
//         global=true;
//         alert(inputItem + " is available at index " + i +" in our bakery ." );
//     }
// }
// if(global===false){
//         alert("We are sorry ." + inputItem + " is not available available in our bakery ." );
// }

//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9.

// var password=prompt("Enter password : ");
//     if (password.length < 6) {
//         document.write("Password must be at least 6 characters long.");
//     }
    
//     var hasAlphabet = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         }
//         if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (!hasAlphabet || !hasNumber) {
//         alert("Password must contain both alphabets and numbers.");
//     }

//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         alert("Password must not start with a number.");
//     }

   

















