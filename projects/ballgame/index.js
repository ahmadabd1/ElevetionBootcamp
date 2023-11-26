
const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const ball = document.getElementById("ball")

let styleLeft=""
let styleRight=""
let styleUp=""
let styleDown=""
const LONG_STEP = 50;
const START_STEP = 0;
const END_STEP = "400px"
const ADD_PX = "px"


//console.log(down.innerHTML)
//down.innerHTML="Down"
//console.log(playingField.innerHTML)
//ball.style.backgroundColor = "yellow"


// const moveRight = function(){
//     const ball = document.getElementById("ball")
//     let left = parseInt(ball.style.left) || 0
//     left += 15
//     ball.style.left = left + "px"
// }

// const moveLeft = function(){

//   if(!parseInt(styleRight)){
//     styleRight = START_STEP
//   }
//   styleRight = parseInt(styleRight)
//   res = styleRight + LONG_STEP
//   styleRight = res + "px"
//   ball.style.right= styleRight
// }

const moveRight = function(){
    if(!parseInt(styleLeft)|| parseInt(styleLeft) > parseInt(END_STEP)){
        styleLeft = START_STEP
    }
    styleLeft = parseInt(styleLeft)
    res = styleLeft + LONG_STEP
    styleLeft = res + ADD_PX
    ball.style.left= styleLeft
  }

const moveLeft = function(){
    if(!parseInt(styleLeft)){
        styleLeft = START_STEP
    }
    if(parseInt(styleLeft) < START_STEP){
      styleLeft = END_STEP
    }else{
    styleLeft = parseInt(styleLeft)
    res = styleLeft - LONG_STEP
    styleLeft = res + ADD_PX
    }
    ball.style.left= styleLeft
  }

const moveUp = function(){
    if(!parseInt(styleUp)|| parseInt(styleUp) > parseInt(END_STEP)){
      styleUp = START_STEP
    }
    styleUp = parseInt(styleUp)
    res = styleUp + LONG_STEP
    styleUp = res + ADD_PX
    ball.style.bottom= styleUp
  }

const moveDown = function(){
    if(!parseInt(styleUp)  ){
      styleUp = START_STEP
    }
    if(parseInt(styleUp) < START_STEP){
      styleUp = END_STEP
    }else{
    styleUp = parseInt(styleUp)
    res = styleUp - LONG_STEP
    styleUp = res + ADD_PX
    }
    ball.style.bottom= styleUp
  }




//   Creating & Adding Elements
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "black"
header.style.fontFamily = "Helvetica"
header.setAttribute("class", "my-header")//id, src,href
//playingField.appendChild(header)
document.body.appendChild(header)


//add h2 to the bodyy
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game By: Ahmad Abdallah"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)
