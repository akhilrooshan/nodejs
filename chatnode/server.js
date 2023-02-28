
var express = require("express")
var bodyParser=require('body-parser')
var Message=require('./model/model')
var app = express()
var http=require('http').Server(app)
var io=require('socket.io')(http)
var mongoose=require('mongoose')
var router=require('./router/router')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var dbUrl='mongodb+srv://admin:admin1234@monog-node.3eywqme.mongodb.net/test'




app.use(router)

app.post('/messages', (req, res) => {
    var message= new Message(req.body)
    message.save()
    io.emit("message",req.body)
    res.sendStatus(200)
})
io.on("connection",(socket)=>{
console.log(`user connected `)

})
mongoose.connect(dbUrl)


var server = http.listen(3120, () => {
    console.log(`server is listning on port ${server.address().port}`)
})


