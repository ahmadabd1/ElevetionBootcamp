console.log("Hello, world!")
let country = "israelllll"
let mysteriousCountry //not initialized, only defined
let userResponse
let userName
console.log(userResponse) // prints undefined
console.log(userName) // throws an error
let a = 6
let b = a

console.log(a) //prints 6
console.log(b) //prints 6

b = 2

console.log(a) //prints 6
console.log(b) //prints 2
const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString
console.log(bothStrings)

console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false

console.log(1 == "1")// prints true
console.log(1 === "1")// prints false 

let startPosition
let newPosition = (startPosition || 0) + 10
console.log(newPosition) //prints 10

function isItMorning(time){
    if(time > 6 && time < 12)
    {
            return true
    }
    return false
}

let username = prompt("What is your username?")
console.log(username)


console.log(isItMorning(7))