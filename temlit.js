//example of template litrals.
let a=17;
let b=18;
let c=a+b;
console.log(`a is ${a} and b is ${b} and the sum of a and b is ${c}`);


//use of template literals
let userName=prompt("enter name: ");
let fullName=`@${userName}${userName.length}`;
console.log(fullName);


//use string uppercase method
let userName=prompt("enter name: ");
let fullName=`@${userName}${userName.length}`; // we use camel case to represent variable name
console.log(fullName);
let newName= `${fullName.toUpperCase()}`;
console.log(newName);

//use string lowercase method
let userName=prompt("enter name: ");
let fullName=`@${userName.toUpperCase()}${userName.length}`;
console.log(fullName);
let newName= `${fullName.toLowerCase()}`;
console.log(newName);


//example.
let value1=parseInt(prompt("enter name: "));
let value2=parseInt(prompt("enter name: "));
if(value1>value2){
  console.log(`${value1} is greater then ${value2}`);
}
else{
  console.log(`${value2} is greater then ${value1}`);

}
  
  
console.log(fullName);


