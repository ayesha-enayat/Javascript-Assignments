//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”
var city=prompt("Enter your city name: ");
if(city  === "karachi"){
    document.write("Welcome to the city of lights");
}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var gender=prompt("Enter your gender");
if(gender === "male"){
    alert("Good morning Sir");
}
else if(gender === "female"){
    alert("Good Morning maam");
}

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var color=prompt("Enter color name :");
if(color === "red"){
    alert("Must stop");
}
else if(color === "yellow"){
    alert("Ready To Move");
}
else if(color === "green"){
    alert("Move now");
}

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car”
var curr_fuel=prompt("Enter remaining fuel (in litres) :");
if(curr_fuel<0.25){
    alert("Please refill the fuel in your car");
}


//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
var obtainedMarks=+prompt("enter obtained marks");
var totalMarks=+prompt("Enter total Marks");
var percentage=(obtainedMarks/totalMarks)*100;

document.write("total marks is : " + totalMarks +"</br>");
document.write("obtained marks is : " + obtainedMarks +"</br>");
document.write("percentage is : " + percentage +"%"+"</br>");

if(percentage >= "80"){
   document.write("Your Grade is A1" +"</br>");
   document.write("Remarks : Excellent");
}
else if(percentage >= "70"){
    document.write("Your Grade is A" +"</br>");
    document.write("Remarks : GOOD");
}
else if(percentage >= "60"){
    document.write("Your Grade is B" +"</br>");
    document.write("Remarks: you need toimprove");
}
else if (percentage<"60")
{
    document.write("  Grade is fail" +"</br>");
    document.write("Remarks sorry");
}
document.write("</br>");
document.write("</br>");

//7. Guess game:Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var num_stored=9;
var user_Num=+prompt("Enter any number from 0 to 10");
if(user_Num===num_stored){
    alert("Bingo!");
}
else if(user_Num+1
    ===num_stored){
    alert("Close enough to the correct answer")
}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var user_input_Num=+prompt("Enter number :");
if(user_input_Num%3 ==0){
    alert("The given number is divible by 3");
}

//9. Write a program that checks whether the given input is an even number or an odd number.
var user_given_number=+prompt("Enter number :");
if(user_given_number%2==0){
    alert("Given number is Even");
}
else{
    alert("Given number is odd");
}

//10. Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”
var T=+prompt("Enter temperature :");
if(T>40){
    alert("It is too hot outside");
}
else if(T>30){
    alert("The Weather today is Normal");
}
else if(T>20){
    alert("Today’s Weather is cool");
}
else if(T>10){
    alert("OMG! Today’s weather is so Cool");
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.
var num1=+prompt("Enter First Number :");
var num2=+prompt("Enter second Number :");
var operation=prompt("Enter operator + - * / % ");
if(operation === "+"){
    alert(num1+num2);
}
else if(operation=== "-"){
    alert(num1-num2);
}
else if(operation=== "*"){
    alert(num1*num2);
}
else if(operation=== "/"){
    alert(num1/num2);
}
else if(operation=== "%"){
    alert(num1%num2);
}
