//get user to input a number using prompt check if the number is a multiple of 9 or not.
let number;
number = prompt("enter number: ");
if(number%9 === 0){
    console.log("The number is multiple of 9");
}
else{
    console.log("The number is not multiple of 9");
}



/*write a code which can give grades to students according to their marks.
90-100 A
80-89  B
70-79  C
60-69  D
50-59  E
0-49   F */
let marks;
marks = prompt("enter number(0-100).");
if(marks >= 90 && marks <= 100){
    console.log("A");
}
else if(marks >= 80 && marks <= 89){
    console.log("B");
}
else if(marks >= 70 && marks <= 79){
    console.log("C");
}
else if(marks >= 60 && marks <= 69){
    console.log("D");
}
else if(marks >= 50 && marks <= 59){
    console.log("E");
}
else{
    console.log("F");
}

//input example 
let a=parseInt(prompt("enter value:- "));
console.log(a);

//using function.
function input(){
let a=parseInt(prompt("enter value:- "));
console.log(a);
}
input();
    
    
