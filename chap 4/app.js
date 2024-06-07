//1. Declare 3 variables in one statement.
var a,b,c;

//2. Declare 5 legal & 5 illegal variable names.

//legal 
var myName;
var my_Father_name;
var $myName;
var myName123;
var _myName;

//illegal
//  var my-Name;          (Hyphens not allowed)
// var 123myName;         (Can not start with numbers)
// var my Father Name;    (Spaces not allowed)
//  var @myName ;        (special character not allowed except $ sign)
//  var ++my_Name;       (operators not allowed)


//3. Display this in your browser
document.write("<h2>Rules for naming JS variables </h2>"); 
document.write("Variable names can only contain numbers , $ and _ . For example:$my_1stvariable" + "<br/>"); 
document.write("Variables must begin with a $ or _ . For example:$name , _name or name" + "<br/>");
document.write("Variable names are case sensitive" + "<br/>");
document.write("Variable names should not be JS Keywords");


//-------------------The End------------//