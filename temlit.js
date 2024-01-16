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

