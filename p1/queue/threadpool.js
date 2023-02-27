// const crypto= require('node:crypto')
const max_calls=16;
process.env.UV_THREADPOOL_SIZE=16
const start=Date.now();
for(let i=0;i<max_calls;i++){
    crypto.pbkdf2("password","Salt",100000,512,"sha512",()=>{
        console.log(`hash :${i+1}`,Date.now()-start)
    })
}

