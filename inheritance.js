class fruits{
    frt(){
        console.log("we have so many fruits.");
    }
    checkfrt(){
        console.log("all fruits are good in taste and all fruits are fresh.");
    }
}
class fruit extends fruits{

}
let apple=new fruits();
apple.frt();
apple.checkfrt();
let orange=new fruits();
orange.frt();
orange.checkfrt();

//example.
class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class doctor extends person{
    work(){
        console.log("i m doctor");
    }
}
let obj=new doctor();
obj.work();
obj.eat();
obj.sleep();

//to invoke parent class constructor.
class A{
    constructor(){
        console.log("hii");
    } 
}
class B extends A{
    super();
}
let obj=new B;
obj.constructor();
