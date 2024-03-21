let operation=prompt("enter +, -, /, *, % : ");
let number1=parseInt(prompt("enter value: "));
let number2=parseInt(prompt("enter value: "));
if(operation === "+"){
    console.log(number1+number2);
}
else if(operation === "-"){
    console.log(number1-number2);
}
else if(operation === "*"){
    console.log(number1*number2);
}
else if(operation === "/"){
    console.log(number1/number2);
}
else if(operation === "%"){
    console.log(number1%number2);
}
else{
    console.log("you entered a wrong operation.");
    console.log("please enter a +,-,/,*");
    console.log("thank you");
}