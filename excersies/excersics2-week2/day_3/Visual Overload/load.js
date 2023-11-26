const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }

const container = document.getElementById("container")
newBox = document.createElement("div");
newBox.setAttribute("class", "box" );
newBox.setAttribute("id", "box");

newBox.style.backgroundColor = getRandomColor()
container.appendChild(newBox);

let cntOfBoxes = 0
newBox.onmouseenter = function(){
    newBox = document.createElement("div");
    newBox.setAttribute("class", "box" );
    newBox.setAttribute("id", "box" `${cntOfBoxes}` );
    newBox.style.backgroundColor = getRandomColor()
    cntOfBoxes +=1
    container.appendChild(newBox);
  
}