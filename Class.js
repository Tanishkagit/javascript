//example1.
class pen{
full(){
console.log("pen rifill is full");
}
empty(){
console.log("pen rifill is empty");
}
}
let bluepen= new pen();

//example2.
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
let info= new information();
let mark= new marks();




