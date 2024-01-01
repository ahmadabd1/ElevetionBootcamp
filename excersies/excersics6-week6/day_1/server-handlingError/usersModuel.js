// Sample data
const users = [
    { username: "bonz", name: "Bony", country: "Nepal", age: 21 },
    { username: "marv", name: "Marvin", country: "Arizona", age: 33 },
    { username: "luc", name: "Lucil", country: "Singapore", age: 47 },
    { username: "marc", name: "Marco", country: "Greece", age: 63 },
    { username: "kev", name: "Kevin", country: "Italy", age: 31 }
]

class usersModule {

    static addUser(newUser){
        console.log(users)
        const userName = newUser.username
        if (!userName.match(/^[a-z]+$/i)) {
            throw new InvalidUsernameError() 
            return
        }
        let doesExist = users.some(w => w.username === userName)
        if (doesExist) {
            throw new DuplicatedResourceError()
            return
        }
        users.push(newUser)
        return 1
    }

     static deleteUser(username){}

    static getAll(){}

   
} 
class InvalidUsernameError extends Error {}

class DuplicatedResourceError extends Error {}

module.exports = {InvalidUsernameError, DuplicatedResourceError, usersModule,users}


