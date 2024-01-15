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
80-100 A
70-89  B
60-69  C
50-59  D
30- 49  E*/
let marks;
marks = prompt("enter number: ");
if(marks >= 80 && marks <= 100){
    console.log("A");
}
else if(marks >= 70 && marks <= 89){
    console.log("B");
}
else if(marks >= 60 && marks <= 69){
    console.log("C");
}
else if(marks >= 50 && marks <= 59){
    console.log("D");
}
else if(marks >= 30 && marks <= 49){
    console.log("E");
}
else{
    console.log("Fail");
}
