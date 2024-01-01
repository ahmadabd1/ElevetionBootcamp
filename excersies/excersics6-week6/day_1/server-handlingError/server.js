const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const app =express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(api)


// app.use(express.static(path.join(__dirname, 'dist')))
// Serving Static Files

// to the client-side we can use this middleware to serve them.
app.use(express.static(path.join(__dirname, 'node_modules')))







const PORT = 3000
app.listen(PORT,function(request,response){
    console.log(`Running in port : ${PORT}`)
})

