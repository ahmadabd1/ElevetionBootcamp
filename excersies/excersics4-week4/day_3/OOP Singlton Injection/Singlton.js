// class DataManger{
//     constructor(){
//         this.data = this.getFromDB()
//     }

//     getFromDB(){
//         // some code that gets data from the DB
//     }

//     addData(data){
//         // code that saves the new piece of data to the DB
//     }
// }
class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}
class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}
const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()

class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}

let weArePoor = false
let relevantFeeder

if (weArePoor) {
    relevantFeeder = cheapFeeder
}
else {
    relevantFeeder = luxuryFeeder
}
// const bumdo = new Animal("Bumdo", "elephant" ,feeder)
const bumdo = new Animal("Bumdo", "elephant" ,relevantFeeder)
bumdo.eat()