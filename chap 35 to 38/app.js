/*1. Write a function that displays current date & time in your
browser. */

// function displayCurrentDateTime(){
//     var today=new Date();
//     return today;
// }
// console.log(displayCurrentDateTime());

/*2. Write a function that takes first & last name and then it
greets the user using his full name.*/

// function Greet(fName,lName){
//     return alert("welcome " + fName + " " + lName) ;
// }

// var firstName=prompt("Enter your first name");
// var lastName=prompt("Enter your last name");
// console.log(Greet(firstName,lastName));

/*3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

// function addTwoNumbers(fNumber,SNumber){
//     return (firstNumber + SecondNumber);
// }
// var firstNumber=+prompt("Enter First Number");
// var SecondNumber=+prompt("Enter Second Number");
//  console.log(addTwoNumbers(firstNumber,SecondNumber));

/*4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

// function calculator(num1,num2,operator){
//     if(operator === "+"){
//         return num1+num2;
//     }
//     else if(operator === "-"){
//         return num1-num2;
//     }
//     else if(operator === "*"){
//         return num1*num2;
//     }
//     else if(operator === "/"){
//         return num1/num2;
//     }
//     else if(operator === "%"){
//         return num1%num2;
//     }
// }
// var number1=+prompt("Enter First Number");
// var number2=+prompt("Enter second Number");
// var op=prompt("Enter operator '+,-,*,%,/' ");
// console.log(calculator(number1,number2,op));


/*5. Write a function that squares its argument. */
// function squareNumber(num){
//     return num**2;
// }
// var number=+prompt("Enter number this function will give you its square : ");
// console.log(squareNumber(number));

/*6. Write a function that computes factorial of a number. */
function factorialNumber(num){
    for(i=1;i<=num;i++){
        var factorial=factorial*i;
        num=num+1;
    }
    return factorial;
}
console.log(factorialNumber(5));