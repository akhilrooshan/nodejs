const https=require('node:https')
const max_calls=1032;
const start=Date.now();
for(let i=0;i<max_calls;i++){
    https.request('https://www.google.com',(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{
            console.log(`request :${i+1}`,Date.now()-start);
        })
    }).end();
}

