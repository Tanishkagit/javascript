//EVENTS IN JS
node.event= ()=>{
//statements.............
}

//Event objects
Node.event = (evts) =>{
    //statments............
}

/*example:-

let button=document.querySelector(".btn")     // in html code we have a class (btn)
button.onclick=()=>{
console.log("this is a button");
}*/....

//js for changemode. 
let button=document.querySelector("#btn");
let mode="light";
button.addEventListener("click",()=>{
  if(mode==="light"){
    mode="dark";
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    mode="light"
    document.querySelector("body").style.backgroundColor="white";
  }
})


//js for input check ...
let inputcheck= document.getElementById('input1');
    let errormsg = document.getElementById('error-msg');
    inputcheck.addEventListener('input1', () => {
        if (inputcheck.value.includes(' ')) {
            errormsg.style.display = 'inline';
        } else {
            errormsg.style.display = 'none';
        }
    });
    form.addEventListener('submit', (event) => {
        if (inputcheck.value.includes(' ')) {
            alert("Didn't submit this form becouse it contain space");
        }
        else{
            alert("submit succesfully.");
        }
    });

