const fs=require('node:fs')

const readfstream=fs.createReadStream("json/campaign.json",{
    encoding:'utf-8',
    highWaterMark:3
})


const writefstream=fs.createWriteStream("1.txt")

readfstream.on("data",(chunk)=>{
    console.log(chunk)
    writefstream.write(chunk)
})


