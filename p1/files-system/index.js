const fs=require('node:fs')

const filecontents=fs.readFileSync("./file.txt","utf-8")
console.log(filecontents)

fs.writeFileSync("./file.txt","akhil",{flag:"a"})

fs.readFile('./file.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})