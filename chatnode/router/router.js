const router = require('express').Router()
const controller=require('../controller/messagecontroller')


router.get('/messages/recieve',controller.Getmessages)


module.exports=router