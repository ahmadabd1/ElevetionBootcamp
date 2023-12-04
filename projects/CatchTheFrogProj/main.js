const gameM = GameModel()
const rend = makeRend()


// gameM.startTimer()
// rend.rendTime()

$("#start").on("click",function(){
    // gameM.addLevel(
        setTime(5)
        startTimer(time);
        rend.startGame()
            

       
    
})
$("#playboard").on("click",".frog",function(){
    setTime(5)
    startTimer(time);
    rend.rendBoard($(this))

})
