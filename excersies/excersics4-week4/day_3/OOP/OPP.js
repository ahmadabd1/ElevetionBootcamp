
//a class is just a blueprint 
class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children =[]
    }
    giveBirth(name){
        this.children.push(name)
        console.log("Boom. Birthed " + name)
    }
}
const cat = new Animal("Puss", 4)
console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"
// //spot check 1

// const dog =new Animal("potshe",4)
// console.log(dog.name + " has " + dog.numLegs + " legs") //prints "Puss has 4 legs"

// const cat1 = new Animal("Puss", 4)
// cat1.giveBirth("Dolly") // prints "Boom. Birthed Dolly"


//spot check 2
// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]?

// Create a Human class.
// It should have three properties: name, age, and isFriendly - a string, number, and boolean.

//spot check 3
// class Human{
//     constructor(name , age, isFriendly){
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
    
// }
// const person = new Human("ahmad",25,true)
// console.log(`${person.name}, who is ${person.age} years old, is ${person.isFriendly ? 'friendly' : 'not friendly'}`)


//spot check 4


class Vehicle {
    
    constructor(x,y,speed){
        this.x = x
        this.y = y
        this.speed =speed
        Vehicle.carsSold++;

    }

    // static getInfo(){
    //     console.log("Cars are great  !  " + this.carsSold)
    // }
    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        console.log("Made "+ (Vehicle.carsSold*30000)+" dollars")
    }
}
Vehicle.carsSold = 0;

const car = new Vehicle(1,2,3)
const car1 = new Vehicle(1,2,3)
const car2 = new Vehicle(1,2,3)


Vehicle.getInfo()
Vehicle.calculateMoney()