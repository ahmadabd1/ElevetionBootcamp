class Vehicle {
    constructor(x, y, speed,fuel ) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel =fuel 
    }

     set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    set fuel(fuel) {
        if (fuel  < 150 && fuel > 0 ) {
            return console.log("fuel  must be range 0-150")
        }
        this._fuel  = fuel 
    }
    
    get speed(){
        return this._speed
    }
    get fuel (){
        return this._fuel 
    }

}

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined
c.speed = 10
console.log(c.speed)
c._fuel = 100
console.log(c._fuel)
