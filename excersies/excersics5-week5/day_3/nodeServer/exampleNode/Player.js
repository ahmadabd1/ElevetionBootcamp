class Player{
    constructor(name){
        this.name=name
        
    }
    say(msg)
    {
        console.log(`${this.name} : ${msg}`)
    }
}

module.exports = Player