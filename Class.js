//example1..
class pens{
full(){
console.log("pen rifill is full.");
}
empty(){
console.log("pen rifill is empty.");
}
}
let bluepen= new pens();
bluepen.full();
bluepen.empty();

//example2....
class students{
  information(){
    name=prompt("enter student name: ");
    age=parseInt(prompt("enter student age: "));
    emailId=prompt("enter student emailid: ");
    phoneNum=parseInt(prompt("enter student phonenumber: "));
    console.log(name);
    console.log(age);
    console.log(emailId);
    console.log(phoneNum);
  }
marks(){
  marks=parseInt(prompt("enter student marks: "));
console.log(marks);
}
}
let info= new students();
info.information();
 info.marks();


//example.
//constructor is automatically created when you create a class.
class game{
  constructor(){
    
    console.log("this is a constructor")
  }
start(){
  
console.log("your game is start");
}
end(){
  
console.log("your game is end");
}
}
let ludo= new game();

//these are the examples of classes......



