// const listFrog ={
//     "1":1,
//     "2":2,
//     "3":3,
//     "4":4,
//     "5":5
// }


const GameModel = function () {

    const MAX_LEVEL = 5
    let gameLevel = 1
    let frogCounter = 1

    const addFrogByLevel = function (numfrog) {
        return numfrog
    }
    const getLevel = function(){
        return gameLevel
    }
    const addLevel = function () {
        if (MAX_LEVEL > gameLevel) {
            gameLevel++
            frogCounter++
        } else {
            return "you win"
        }
    }

    const checkFrogCounter = function () {
        if (frogCounter == 0) {
            return true
        } else {
            return false
        }
    }
    const removeFrog = function () {
        frogCounter--

    }
    const getNumberFrog = function(){
        return frogCounter
    }
    return {
        addLevel, addFrogByLevel, checkFrogCounter, removeFrog,getNumberFrog,getLevel
    }
   

}

// const hello = GameModel()
// hello.startTimer()
