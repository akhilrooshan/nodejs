const readline = require("readline-sync");


function name(){
    let name=readline.question('what is your name \n')
    return name
}

var myName=name();
console.log(`hy ${myName},how can i help you`)
var i=0
while(i<1)
{

    let time,date,exit=false;
console.log('current date,current time,exit')
var query=readline.question('pick one \n')
time = query.includes("time");
date=query.includes("date")
exit=query.includes("exit")

if(exit==true)
{
    i=1
    console.log(`have a nice day ${myName}`)
}else if(time==true){
    let t=new Date()
    console.log(`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`)
    continue
}
else if(date==true){
    let t=new Date()
    console.log(`${t.getFullYear()}`)
}
}