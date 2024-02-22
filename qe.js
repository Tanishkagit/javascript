let formula1, formula2;
let a=parseInt(prompt("enter value: "));
let b=parseInt(prompt("enter value: "));
let c=parseInt(prompt("enter value: "));
let value= b*b - 4*a*c;
formula1=(-b + Math.sqrt(value))/2;
formula1=(-b - Math.sqrt(value))/2;
console.log(formula1);
console.log(formula2);