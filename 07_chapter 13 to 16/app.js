//Declare an empty array using JS literal notation to store student names in future.
let studentNames = [];

//2. Declare an empty array using JS object notation to store student names in future.
let studentName = new Array();

//3. Declare and initialize a strings array.
let string_Array=["ayesha","aqsa","iqra","hira"];

//4. Declare and initialize a numbers array.
let numbers_Array=[1,2,3,67,43,90,32];

//5. Declare and initialize a boolean array.
let booleanArray = [true, false, true, false];

//6. Declare and initialize a mixed array.
let mixed_Array = ["ayesha",12334,true,false,"maham",7685];

//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listedqualifications in your browser like:

let education_qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PHD"];
document.write("<h1>QUALIFIFICATION</h1>")
for(i=0;i<education_qualification.length;i++){
    document.write(i+1 +") " + education_qualification[i] +"<br>");
}

document.write("</br>");


//8. Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
let student_names=["Ali","Nehal","Fahad"];
let marks=[478,354,398];
var total_marks=500;
document.write("Score of " + student_names[0] +" is " + marks[0] +" . percentage is " + (marks[0]/total_marks)*100 + "%" + "</br>");
document.write("Score of " + student_names[1] +" is " + marks[1] +" . percentage is " + (marks[1]/total_marks)*100 + "%" + "</br>");
document.write("Score of " + student_names[2] +" is " + marks[2] +" . percentage is " + (marks[2]/total_marks )*100 + "%" + "</br>");

document.write("</br>");


//9. Initialize an array with color names. Display the arrayelements in your browser.a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.b. Ask the user what color he/she wants to add to the end& add that color to the end of the array. Display theupdated array in your browser.c. Add two more color to the beginning of the array.Display the updated array in your browser.d. Delete the first color in the array. Display the updatedarray in your browser.e. Delete the last color in the array. Display the updatedarray in your browser.f. Ask the user at which index he/she wants to add a color& color name. Then add the color to desiredposition/index. . Display the updated array in yourbrowser.g. Ask the user at which index he/she wants to deletecolor(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-definedposition/index. . Display the updated array in your browser.
let colors_Array=["green","blue","purple","red","pink"]; 
document.write("The Newly created array is = " + colors_Array + "<br>");
var user_color_start=prompt("Enter color name that you want to add at the beginning of an array : ");
colors_Array.unshift(user_color_start);
document.write("After adding " + user_color_start + " at the beginning of an array updated array is =  "+ colors_Array + "<br>");
var  user_color_end=prompt("Enter color name that you want to add at the end of an array : ");
colors_Array.push(user_color_end);
document.write("After adding " + user_color_end + " at the end of an array updated array is = "+ colors_Array+ "<br>");
var color_1=prompt("Enter color 1 name that you want to add at the beginning of an array : ");
colors_Array.unshift(color_1);
document.write("After adding " + color_1 + " at the beginning of an array updated array is = "+ colors_Array+ "<br>");
var color_2=prompt("Enter color 2 name that you want to add at the beginning of an array : ");
colors_Array.unshift(color_2);
document.write("After adding " + color_2 + " at the beginning of an array updated array is = " + colors_Array+ "<br>");
colors_Array.shift();
document.write("After deleting 1st element from an array updated array is = " + colors_Array+ "<br>");
colors_Array.pop();
document.write("After deleting last element from an array updated array is = " + colors_Array+ "<br>");
var colorName=prompt("Enter color name that you want to adding in the array ");
var colorIndex=prompt("Enter index number that you want to adding in the array ");
colors_Array.splice(colorIndex, 0, colorName);
document.write("After Adding " + colorName + " at index "  + colorIndex  + " is = " + colors_Array + "<br>" );
var color_index=+prompt("Enter Index number at which index number you want to delete : ");
var indexs=+prompt("Enter how many index number you want to delete : ");
colors_Array.splice(color_index, indexs);
document.write("Ater deleting " + indexs  + " elements "  +  " from index number " + color_index + " the updated array is : "  + colors_Array);
document.write("</br>");
document.write("</br>");


//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var student_scores=[320,230,480,120];
document.write("Scores of student is = " + student_scores +"</br>");
document.write("Ordered Scores of student is = " + student_scores.sort()+ "</br>");
document.write("</br>");


//11. Write a program to initialize an array with city names.
//Copy 3 array elements from cities array to selectedCities array.
var cities=["karachi","lahore","islamabad","peshawar","multan","fisalabad"];
var selectedCities=cities.slice(0,3);
document.write("<h1>cities List </h1> " + "</br>" + cities +"</br>");
document.write("<h1> selected cities list </h1>" +"</br>" + selectedCities+"</br>");
document.write("</br>");

//12. Write a program to create a single string from the below mentioned array:var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
var arr=["This","is","my","cat"];
var join=arr.join(" ");
document.write("<h1> Array : </h1>" + arr +"</br>");
document.write("<h1> String : </h1>" + join +"</br>");
document.write("</br>");

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which theywere stored. (FIFO-First In First Out)
var devices=["keyboard","mouse","printer","monitor"];
document.write("<h1>Devices</h1>" +"</br>"+devices +"</br>");
var out1 =devices.shift();
var out2=devices.shift();
var out3 =devices.shift();
var out4=devices.shift();
document.write("<h1>out: </h1> " +out1+ "</br>");
document.write("<h1>out:</h1> " + out2+ "</br>");
document.write("<h1>out:</h1> " + out3+ "</br>");
document.write("<h1>out:</h1> " + out4+ "</br>");
document.write("</br>");

//14. Create a new array. Store values one by one in such a waythat you can access the values in reverse order. (Last In- First Out)
var devices1=["keyboard","mouse","printer","monitor"];
document.write("<h1>Devices</h1>" +"</br>"+devices +"</br>");
var out1 =devices1.pop();
var out2=devices1.pop();
var out3=devices1.pop();
var out4=devices1.pop();
document.write("<h1>out: </h1> " +out1+ "</br>");
document.write("<h1>out:</h1> " + out2+ "</br>");
document.write("<h1>out:</h1> " + out3+ "</br>");
document.write("<h1>out:</h1> " + out4+ "</br>");
document.write("</br>");

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.Display the following dropdown/select menu in your browser using document.write() method:
var phones=["Apple", "Samsung", "Motorola", "Nokia", "Sony" ,"Haier" ];
document.write('<select>');
document.write('<option value="'+ phones[0]+'">' + phones[0]+  '</option>');
document.write('<option value="'+ phones[1]+'">' + phones[1]+  '</option>');
document.write('<option value="'+ phones[2]+'">' + phones[2]+  '</option>');
document.write('<option value="'+ phones[3]+'">' + phones[3]+  '</option>');
document.write('<option value="'+ phones[4]+'">' + phones[4]+  '</option>');
document.write('<option value="'+ phones[5]+'">' + phones[5]+  '</option>');

document.write('</select>')
