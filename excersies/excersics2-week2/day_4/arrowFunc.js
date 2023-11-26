// const greet = () => {
//     console.log("Hello there")
//   }
//   greet()

const greet = (name) => console.log("Hello there, " + name)

greet("Jolene") //prints "Hello there, Jolene"


const greet1 = name => console.log("Hello there, " + name)

greet1("Jolene") //prints "Hello there, Jolene"

// spot check 4

const square = num =>console.log(num*num)
square(4) // should print 16

// const add = (x, y) => {
//     return x + y
//   }
  
//   const sum = add(1, 2) 
//   console.log(sum) //prints 3
const add = (x, y) => x + y

const sum = add(1, 2) 
console.log(sum) //prints 3

const getHypotenuse = (a, b) => {
    const aSquared = a * a
    const bSquared = b * b
    const cSquared = aSquared + bSquared
    return Math.sqrt(cSquared)
  }
  
  const hypoteneuese = getHypotenuse(3, 4) 
  console.log(hypoteneuese ) //prints 5

const getFormalTitle = (title,name) => title +" "+ name
formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()
const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name in 3 seconds...")

        setTimeout(() => { //this is the change
            console.log("The name is: " + this.name)
        }, 3000)

    }
}

suspenseBuilder.displayName()