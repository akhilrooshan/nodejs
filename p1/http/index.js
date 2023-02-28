const http=require('node:http')
const data=require('../json/campaign.json')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify(data))
})

server.listen(3900,()=>{
    console.log("server running at port 3900")
})        


