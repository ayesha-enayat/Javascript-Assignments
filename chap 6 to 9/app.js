//1. Write a program to take a number in a variable, do the 
//required arithmetic to display the following result in your browser:
var a=+prompt("Enter number : ");
document.write("<h1>Result</h1>" + "</br>" + "The Value of a is " + a +"</br>");
document.write("</br>");
document.write("</br>");
document.write("The value of ++a is : " + ++a +"</br>");
document.write("Now The value of a is : " + a + "</br>");
document.write("</br>");
document.write("</br>");
document.write("The value of a++ is : " + a++ +"</br>");
document.write("Now The value of a is : " + a + "</br>");
document.write("</br>");
document.write("</br>");
document.write("The value of --a is : " + --a +"</br>");
document.write("Now The value of a is : " + a + "</br>");
document.write("</br>");
document.write("</br>");
document.write("The value of a-- is : " + a-- +"</br>");
document.write("Now The value of a is : " + a + "</br>");
document.write("</br>");


//2. What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

var c=2;
var d=1;
document.write("c is " + c + "</br>");
document.write("d is " + d + "</br>");
var result = --c - --d + ++d + d--;
document.write("The result is " + result);
document.write("</br>");
document.write("</br>");

//3. Write a program that takes input a name from user & greet the user.

var userName=prompt("Enter your Name : ");
alert("Good Morning " + userName);
document.write("</br>");
document.write("</br>");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var table=+prompt("Enter number to print table : ");

for (var i = 1; i <= 10; i++) {
if (table == 0) {
        table = 5; // Default value if no input
      
    tableOutput = table + " * " + i + " = " + (table * i) + "<br>";
    document.write(tableOutput);
}
else{
    
    tableOutput = table + " * " + i + " = " + (table * i) + "<br>";
    document.write(tableOutput);   
}
  }

document.write("</br>");

//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1=prompt("Enter subject 1 name : ");
var subject2=prompt("Enter subject 2 name : ");
var subject3=prompt("Enter subject 3 name : ");
var totalMarks=100;
var subject1_obtainedMarks=+prompt("Enter Obtained marks of " + subject1);
var subject2_obtainedMarks=+prompt("Enter Obtained marks of " + subject2);
var subject3_obtainedMarks=+prompt("Enter Obtained marks of " + subject3);
var sum_totalMarks=totalMarks+totalMarks+totalMarks;
var sum_obtained_marks=subject1_obtainedMarks+
subject2_obtainedMarks+subject3_obtainedMarks;

var percent1=(subject1_obtainedMarks/totalMarks)*100;
var percent2=(subject2_obtainedMarks/totalMarks)*100;
var percent3=(subject3_obtainedMarks/totalMarks)*100;
var avg_percent=(percent1+percent2+percent3)/3;

document.write("<table>");
document.write(
    "<tr>"+
    "<th>"+ " Subject "+ "</th>"+
    "<th>"+ " Total Marks " + "</th>"+
    "<th>"+ " obtained marks " + "</th>"+
    "<th>"+ " percentage " + "</th>"+
    "</tr>"+

    "<tr>"+
    "<th>"+  subject1 + "</th>"+
    "<th>"+  totalMarks + "</th>"+
    "<th>"+ subject1_obtainedMarks + "</th>"+
    "<th>"+ percent1 + "%" + "</th>"+
    "</tr>"+

    "<tr>"+
    "<th>"+ subject2+ "</th>"+
    "<th>"+ totalMarks + "</th>"+
    "<th>"+ subject2_obtainedMarks + "</th>"+
    "<th>"+ percent2 + "%" + "</th>"+
    "</tr>"+

    "<tr>"+
    "<th>"+ subject3+ "</th>"+
    "<th>"+ totalMarks + "</th>"+
    "<th>"+ subject3_obtainedMarks + "</th>"+
    "<th>"+ percent3 + "%" + "</th>"+
    "</tr>"+

    "<tr>"+
    "<th>" +"</th>"+
    "<th>"+ sum_totalMarks + "</th>"+
    "<th>"+ sum_obtained_marks + "</th>"+
    "<th>"+ avg_percent + "%" + "</th>"+
    "</tr>"
)
document.write("</table>");



