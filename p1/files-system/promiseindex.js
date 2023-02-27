const fs=require('node:fs/promises')

async function writeData(filename,content,flags)
{
    try{
        const data=await fs.writeFile(filename,content,{flag:flags})

    }
    catch(err){
        console.log(err)
    }
}



writeData("./promisetext","hello",'a')