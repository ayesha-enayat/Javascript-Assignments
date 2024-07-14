//1. Declare and initialize an empty multidimensional array.(Array of arrays)
// Initialize a 2x2 empty array
let multiArray = [[],[]];

//2. Declare and initialize a multidimensional array representing the following matrix:
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<h1>MATRIX</h1>"+"</br>");
for(i=0;i<matrix.length;i++){
    for(j=0; j<matrix[i].length;j++){
        document.write(matrix[i][j] + " ");
        
    }
    document.write("</br>");

}
document.write("</br>");



//3. Write a program to print numeric counting from 1 to 10.
for(i=1;i<=10;i++){
    document.write(i + "</br>");
}
document.write("</br>");



//4. Write a program to print multiplication table of any number using for loop. Table number & length should betaken as an input from user.
var table=+prompt("enter any number to print table:");
for(i=1;i<=10;i++){
    document.write(table+" x "+i+ " = " +table*i +"</br>");
}
document.write("</br>");



//4. Write a program to print multiplication table of any number using for loop. Table number & length should betaken as an input from user.
var num=+prompt("Enter number for print table :");
var length=+prompt("enter length of table");
document.write("multiplication table of " + num + "</br>" + "length :" + length +"</br>")
for(i=1;i<=length;i++){
    document.write(num + " x " + i + " = " +num*i +"</br>");
}
document.write("</br>");

//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
var fruits=["apple","banana","mango","orange","strawberry"];
for(i=0;i<fruits.length;i++){
    document.write(fruits[i]+"</br>");
}
for(i=0;i<fruits.length;i++){
    document.write("Element at index " +[i]+ " is " + fruits[i]+ "</br>");
}
document.write("</br>");

//6. Generate the following series in your browser. See
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var counting=1;
document.write("<h2>Counting</h2>" + "</br>");
for(i=counting;i<=15;i++){
    document.write(i + ",");
}
document.write("<h2>Reverse Counting</h2>" + "</br>");
for(i=10;i>0;i--){
    document.write(i + ",");
}
document.write("<h2>Even</h2>" + "</br>");
for(i=0;i<=20;i++){
   if(i%2==0){
    document.write(i , ",");
   }

}
document.write("<h2>Odd</h2>" + "</br>");
for(i=0;i<=20;i++){
   if(i%2!=0){
    document.write(i , ",");
   }

}
document.write("<h2>Series</h2>" + "</br>");
for(i=1;i<=20;i++){
   if(i%2==0){
    document.write(i , "K ,");
   }

}
document.write("</br>");
document.write("</br>");

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in  array.
//After searching, prompt the user whether the given item is found in the list or not. Example:
var arr=["cake","apple pie","cookie","chips","patties"];
var userInput=prompt("Enter element you want to search : ");
var flag="false";
for(i=0;i<arr.length;i++){
    if(arr[i]===userInput){
        flag="true";
        document.write(userInput + " is available at " + i + " in our bakery");
        break;
    }
   
}
if(flag=="false"){
    document.write("we are sorry " + userInput + " is not avaiable in our bakery " +"</br>");
}

document.write("</br>");
document.write("</br>");

//8. Write a program to identify the largest number in the given array.

var arr = [24, 53, 78, 91, 12];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
document.write("Array items : " + arr +"</br>");
document.write("Largest number is : "  + largest +"</br>");
document.write("</br>");
    
   
//9. Write a program to identify the smallest number in thegiven array.
//A = [24, 53, 78, 91, 12]
var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < smallest ) {
    smallest = arr[i];
  }
}
document.write("Array items : " + arr +"</br>");
document.write("Smallest number is : "  + smallest +"</br>");
document.write("</br>");

//10. Write a program to print multiples of 5 ranging 1 to 100.
for(i=1;i<=100;i++){
    if(i%5==0){
        document.write(i , " , ");
    }
}

