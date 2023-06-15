const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000,function(){
    console.log('Listening to port 3000');
})

app.post('/',function(formReq,formRes){
    console.log(formReq.body.fName)
})

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
})