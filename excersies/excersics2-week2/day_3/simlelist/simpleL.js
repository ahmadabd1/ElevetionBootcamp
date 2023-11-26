const list = document.getElementById("list")
console.log(list)
const addNewElementToList = function(){
    const newitem = document.createElement("li")
    newitem.innerHTML = "A NEW ITEMS IN THE LIST"
    list.appendChild(newitem)

}