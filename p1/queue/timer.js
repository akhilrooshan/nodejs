const eventEmitter=require('node:events')
const wish=new eventEmitter()
wish.on("wish",(helo,c)=>{
    console.log(`this wish is passeed ${c} sec later ,${helo}`)
})

wish.on("bye",()=>{
    console.log(`wish time is over.get lost`)
})
setTimeout(() => {
    wish.emit('bye')
    
}, 10100);
let count=0;


setInterval(()=>{
    if(count<10)
{
    count+=2

    wish.emit("wish","good morning",count)
}
else{
    clearInterval()
}},2000)


