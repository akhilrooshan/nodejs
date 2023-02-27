const http=require('node:http')
const jsondata=require('../json/campaign.json')


const brave=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify(jsondata))
})

brave.listen(3000,()=>{
    console.log("server running at port 3000")
})