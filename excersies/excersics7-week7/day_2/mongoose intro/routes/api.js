const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})
//EX 1 :
router.post('/person', function (req, res) {
   
    console.log(req.query.age)
    const newP = new Person({firstName:req.query.firstname, lastName:req.query.lastname, age:req.query.age})
    newP.save()
    console.log(newP)
    res.send(newP)
  
})
//EX 2 :
router.put('/person/:id',function(req,res){
    const idPerson = req.params.id
    Person.findById(idPerson).then( function (person) {
        person.age = 80 //how time flies
        person.save()
        res.send("its updated")
    }) 
})
//EX 3 :
router.delete('/apocalypse',function(req,res){
    
    Person.deleteMany().then(function(){

        res.send("all the data is deleted")
    })
    

})
module.exports = router