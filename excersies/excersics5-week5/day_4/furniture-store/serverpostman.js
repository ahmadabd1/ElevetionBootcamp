const express = require('express')
const app = express()
const path = require('path')

// to amke sure that the postman doing what do you expected
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


app.get('/',function(req,res){
    res.send(store)
})
app.post('/',function(req,res){
    console.log(req.body)
    store.push(req.body)
    
})


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))






const port = 3000
app.listen(port,function(){
    console.log(`Running server on port ${port}`)
})