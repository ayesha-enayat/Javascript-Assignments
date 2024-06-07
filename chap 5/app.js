//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1=+prompt("Enter 1st number : ");
var num2=+prompt("Enter 2nd number : ");
var sum=num1+num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum +"</br>");



//2. Repeat task1 for subtraction, multiplication, division & modulus.
var subtraction=num1-num2;
var multiplication=num1*num2;
var division=num1/num2;
var modulus=num1%num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction +"</br>");
document.write("Muliplication of " + num1 + " and " + num2 + " is " + multiplication +"</br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division +"</br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus +"</br>");
document.write("</br>")


//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after increment is: 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3.
//l. Output : “The remainder is : 0”.

var a ;
document.write("Value after declaration is undefined" + "</br>");
a=10;
document.write("Initial Value is " + a + "</br>");
a++;
document.write("Value after Increment is " + a + "</br>");
a=a+7;
document.write("Value after Addition is " + a + "</br>");
a--;
document.write("Value after Decrement is " + a + "</br>");
a=a%3;
document.write("The remainder is " + a + "</br>");
document.write("</br>");


//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:Total cost to buy 5 tickets to a movie is 3000PKR
var ticket_price=600;
ticket_price=ticket_price*5;
document.write("Total cost to buy 5 tickets to a movie is " + ticket_price +"PKR" + "</br>");
document.write("</br>");

//5. Write a script to display multiplication table of any number in your browser. E.g
var table=+prompt("Enter any number to Print table : ");
var counter=1;
var inc=1;
document.write("Table For " + table + "</br>")
document.write(table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>"  + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>" + table + " x " + counter++ + " = " + table*inc++ + "</br>");
document.write("</br>")

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
var celcius_temp=+prompt("Enter celsius temperature : ");
var F_temp=(celcius_temp*9/5)+32;
document.write(celcius_temp +"C " + " is " + F_temp +"F" + "</br>");
var Fahrenheit_temp=+prompt("Enter fahrenheit temperature : ");
var C_temp=(Fahrenheit_temp-32)*5/9;
document.write(Fahrenheit_temp +"F " + " is " + C_temp +"C" + "</br>");
document.write("</br>");

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

var price_item1=+prompt("Enter price for item 1 : ");
var price_item2=+prompt("Enter price for item 2 : ");
var quantity_item1=+prompt("Enter Quantity for item 1 : ");
var quantity_item2=+prompt("Enter Quantity for item 2 : ");
var shipping_Charges=+prompt("Enter shipping charges");
var total_cost=(price_item1*quantity_item1)+(price_item2*quantity_item2)+shipping_Charges;
document.write("price of item 1 is " + price_item1 + "</br>");
document.write("price of item 2 is " + price_item2 + "</br>");
document.write("Quantity of item 1 is " + quantity_item1 + "</br>");
document.write("Quantity of item 2 is " + quantity_item2 + "</br>");
document.write("Total cost  is " + total_cost+ "</br>" );
document.write("</br>");


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var total_marks=+prompt("Enter Totak Marks : ");
var obtained_marks=+prompt("Enter Obtained Marks : ");
var percentage=(obtained_marks/total_marks)*100;
document.write("<h1> MarkSheet </h1>");
document.write("Total Marks " + total_marks  +"</br>");
document.write("Obtained marks " + obtained_marks  +"</br>");
document.write("percentage : " + percentage + "%"  +"</br>");
document.write("</br>");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupeeand 1 Saudi Riyal = 28 Pakistani Rupee)

var us_Dollar=+prompt("Enter Us dollar to convert it into PkR");
var saudi_Riyals=+prompt("Enter saudi Riyals to convert it into PkR");
var total_currency_PKR=(us_Dollar*104.80)+(saudi_Riyals*28);
document.write("<h1>Currency In PKR </h1>");
document.write("Total currency in PKR " + total_currency_PKR);
document.write("</br>");
document.write("</br>");


//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression
var my_num=9;
document.write("<h1> Perform all operation in a single expression the result is </h1>")
document.write("total is " + my_num+5*10/2 + "</br>");
document.write("</br>");

//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
var curr_year=+prompt("Enter current year : ");
var birth_year=+prompt("Enter birth year : ");
var age=curr_year-birth_year;
document.write("<h1> Age calculator </h2>");
document.write("current year " + curr_year +"</br>");
document.write("Birth year " + birth_year +"</br>");
document.write("your age is " + age +"</br>");

//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius=+prompt("Enter radius of a circle : ");
var circumference=2*3.142*radius;
document.write("<h1> The Geometrizer </h1> ")
document.write("The radius of a circle is = " + radius +"</br>");
document.write("The circumference is " + circumference +"</br>");
var area=3.142*radius**2;
document.write("Area of a circle is " + area +"</br>");
document.write("</br>");

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var fav_snacks=prompt("Enter your favourite snacks: ");
var your_age=+prompt("Enter your current Age : ");
var max_age=+prompt("Estimated Max age : ");
var estimated_amt=+prompt("Amount of snacks per day : ");
var total_amount=(max_age-your_age)*estimated_amt;
document.write("<h1> The LifeTime supply Calculator </h1>")
document.write("Favourite Snacks = " + fav_snacks +"</br>");
document.write("Current Age = " + your_age +"</br>");
document.write("Estimated Max age =  " + max_age +"</br>");
document.write("Amount of snacks per day =  " + estimated_amt +"</br>");
document.write("You will need " +  total_amount + " " +  fav_snacks + " " + " to last until the ripe old age of " + max_age + "</br>");








