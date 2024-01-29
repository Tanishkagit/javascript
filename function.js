//print your message by using function.
function myfunction(){
    console.log("I am learning javascript");
}
myfunction();

//print message by using parameter and argument.
function message(msg){
    console.log(msg);
}
message("I LOVE YOU MY SPECIAL ONE"); 

//create a function for sum of two numbers.
function sum(x,y){
    console.log(x+y);
}
sum(9,8);

//create a function for multiply of two numbers
function mul(x,y){
    console.log(x*y);
}
mul(9,8);

//compare two values by using function.
function com(x,y){
    if(x>y){
        console.log("x is greater");
    }
    else{
        console.log("y is greater");
    }
}
com(9,12);


//ARROW FUNCTIONS......

//sum of two values by using arrow function.
let sum=(a,b)=>{
    console.log(a+b);
}
sum(5,5);

//multiply of two values by using arrow function.
let mul=(x,y)=>{
    console.log(x*y);
}
mul(5,5);

//compare two values by using arrow function.
let compare=(a,b)=>{
    console.log(a>b?"a is greater":"b is greater");
}
compare(10,14);

//reduce method in array using function.
let array=[1,2,3,4,5,6,7,8,9,10];
let n=array.reduce((sta,en)=>{
    return sta*en;
});
console.log(n);

//reduce method in array using functions for addition.
let array=[1,2,3,4,5,6,7,8,9,10];
let n=array.reduce((sta,en)=>{
    return sta+en;
});
console.log(n);




