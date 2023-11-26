const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")

const enterColor = function () {
    box2.style.backgroundColor = "#c0392b"
    box2.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box2.style.backgroundColor = "#1abc9c"
    box2.innerHTML = "Hover over me!"
}

const clickColor = function(){
    box3.style.backgroundColor = "#8e44ad"
}

const box1 = document.getElementById("box1")
box1.onclick = function () {
    box1.innerHTML = "clicked"
}

const box4 = document.getElementById("box4")
box4.onmouseenter = function(){
    box4.innerHTML = "the mouse on me"
}

const box5 = document.createElement("div") // dynamically creating an element
box5.setAttribute("class", "box5")
box5.setAttribute("id", "box5")
box5.innerHTML = "I'm here"
box5.onclick = function(){       // adding an event to the new element
    box5.innerHTML = "I'm alive!"
}

document.getElementById("box4").appendChild(box5) // now the box will be on the page, and will react to a click!