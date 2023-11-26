// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()
// const getData1 = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// getData1()
// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for(let user1 of users) {
//         console.log(user1.name)
//     }
// }

// getData()
// displayData()

// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()

// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument

let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)


const doSomething = function(){
    console.log("something")
  }
  
  setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds


  //timer function clock
//   const timer = function(){
//     console.log(new Date())
//   }
  
//   setInterval(timer, 1000)