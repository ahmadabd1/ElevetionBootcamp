
const url = "https://st3.depositphotos.com/1548395/13333/i/1600/depositphotos_133338594-stock-illustration-2d-cartoon-illustration-of-bufo.jpg"

const modelG = GameModel()

const makeRend = function () {


    const rendTime = function(){
        $("#timer").text("second left : "+ gameM.getTime())

    }

    const startGame = function(){
        $("#textleft").val(modelG.getNumberFrog() +"~ Frog lefts")
        $("#textright").val("Level "+ modelG.getLevel()) 
        $("#start").html('Catch the frog')
        for(let i=0; i<modelG.getNumberFrog();i++){
            const newFrog = "<div class=forg >iam for number "+i+"</div>"
            $("#playboard").append(newFrog)
        }
        
        
    }
    const rendBoard = function(frog){
        frog.empty()
        modelG.removeFrog()
        $("#playboard").empty()
        if(modelG.getNumberFrog()==0&&modelG.getLevel()< 5){
            modelG.addLevel()
            startGame()
        }else{
        console.log("make rend")
        }
    }

    const rendLevel = function(){

    }
   

    

return{
    rendTime,rendBoard,rendLevel,startGame
}
}