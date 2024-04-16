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