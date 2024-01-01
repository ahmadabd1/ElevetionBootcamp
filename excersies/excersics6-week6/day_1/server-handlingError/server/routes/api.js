const express = require('express')
const useModule = require('../../usersModuel')
const router = express.Router()






router.get('/users', function (req, res) {
    res.send(useModule.users)
})

router.post('/users', function (req, res) {
    const newUser = req.body
    const username = newUser.username
   
    try{
        useModule.usersModule.addUser(newUser)
        res.status(201).send("the user is added!!")
    } catch (error) {
        if (error instanceof useModule.InvalidUsernameError){
            res.status(400).send({ "Error": `${username} is not a valid name` })
        } else if (error instanceof useModule.DuplicatedResourceError){
            res.status(409).send({ "Error": `User ${username} already exist` })
        }
    }
    res.end()
})
// router.post('/user', function (req, res) {
//     const newUser = req.body
//     const userName = newUser.username
//     if (!userName.match(/^[a-z]+$/i)) {
//         res.status(400).send({ "Error": `${userName} is not a valid name` })
//         return
//     }
//     let doesExist = users.some(w => w.username === userName)
//     if (doesExist) {
//         res.status(409).send({ "Error": `User ${userName} already exist` })
//         return
//     }
//     users.push(newUser)
//     res.status(201).end()
//     // let newUser ={}
//     // newUser.username = user.username
//     // newUser.name = user.name
//     // newUser.country = user.country
//     // newUser.age=user.age
//     // users.push(newUser)
  
// })
router.delete('/users/:username', function (req, res) {

    
        let username = req.params.username
        let userIndex = useModule.users.findIndex(user => user.username === username)
        if (userIndex === -1) {
            res.status(404).send({ "Error": `User ${username} does not exist` })
        } else {
            useModule.users.splice(userIndex, 1)
            res.status(201).send("the username is deleted!");
        }
})

module.exports = router
