const fs=require('node:fs')

const readableFilestream=fs.createReadStream("./fsteam1.txt",{
    encoding:'utf-8',
    highWaterMark:4
});

const writablefilestream=fs.createWriteStream("./fstream2.txt")


readableFilestream.on('data',(chunk)=>{
    console.log(chunk)
    writablefilestream.write(chunk)
})