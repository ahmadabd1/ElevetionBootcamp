const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]

if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}

console.log(bag)
//console.log("Added " + nextItem) its make error

let height = 1.73

const grow = function(){
  height += 0.1
}

grow()
console.log(height)

//errorrrrr
// const getBaseHeight = function(){
//     const height = 1.73  
//     return height
//   }
  
//   const grow = function(){
//     height += 0.1
//   }
  
//   grow()


//section 1 -error

// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles") 

//section 2 error

// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }


//section 3 - sucess

// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)

//section 4 -error

// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

//section 5 error

// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

//section 6 error

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

