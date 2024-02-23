let formula1, formula2;
let a=parseInt(prompt("enter value: "));
let b=parseInt(prompt("enter value: "));
let c=parseInt(prompt("enter value: "));
let value= b*b - 4*a*c;
if(value>0){
    formula1= (-b + Math.sqrt(value))/2*a;
    formula2= (-b - Math.sqrt(value))/2*a;
console.log(`${formula1}, ${formula2}`);
}
else if(value==0){
    formula1= (-b)/2*a;
    formula2= (-b)/2*a;
    console.log(`${formula1}, ${formula2}`);
}
else{
    let rp = (-b / (2 * a)).toFixed(2);
    let ip = (Math.sqrt(-value) / (2 * a)).toFixed(2);
    console.log(`${rp}, ${ip}`);
}
