const express = require('express')
const app = express()
const path = require('path')

// to amke sure that the postman doing what do you expected
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/',function(req,res){
    res.send(store)
})
app.post('/',function(req,res){
    console.log(req.body)
    store.push(req.body)
    
})

//EX 3
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))





//EX 2
app.get('/priceCheck/:nameS', function (req, res) {
    let n = req.params.nameS
    let pop = { "price": null }
    for (let i = 0; i < store.length; i++) {
        if (store[i].name === n) {
            pop["price"] = store[i].price
        }
    }
    res.send(pop)
})

const getTheItemByName = function(itemName,itemIndex){
    for (let i = 0; i < store.length; i++) {
        if (store[i].name === itemName) {
            store[i].inventory -= 1
            itemIndex= i
        }
    }
    return itemIndex

}

//EX 4
app.get('/buy/:name', function (req, res) {
    let itemName = req.params.name
    let itemIndex = -1

    itemIndex = getTheItemByName(itemName,itemIndex)
    
    if(itemIndex === -1){
        res.send("the item is not in the store!")    
    }else{

        res.send(store[itemIndex])
    }
})

//EX 5
app.get('/buy',function(req,res){
    let itemName = req.params.name
    let itemIndex = -1

    itemIndex = getTheItemByName(itemName,itemIndex)
    if(itemIndex === -1){
        res.send("the item is not in the store!")    
    }

})

//EX 6
app.get('/sale',function(req,res){
    let isAdmin = req.query.admin //true or false (boolean)
    if(isAdmin=="true"){
        for(let i=0;i<store.length;i++){
            if(store[i].inventory > 10){
                store[i].price = (store[i].price/2)
            }
        }

    }
    res.send(store)

})



const port = 3000
app.listen(port, function () {
    console.log(`Server is up and running smoothly ${port}`)
})