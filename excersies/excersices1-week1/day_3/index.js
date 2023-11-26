
//   const multiply = function(x, y = 2){
//     console.log(x * y)
//   }
  
//   multiply(3, 4) // prints 12
//   multiply(3) // prints 6

//   const changeArray = function(arr){
//     let innerArray = arr
//     innerArray[0] = 50
//   }
  
//   const numbers = [1, 2, 3]
  
//   changeArray(numbers)
//   console.log(numbers) // prints [50, 2, 3]

//   const add = function(x, y){
//     return x + y
//   }
  
//   const sum = add(1, 2)
//   console.log(sum) // prints 3


//   const meow = function(){
//     console.log("Meow")
// }

// const woof = function(){
//     console.log("woof")
// }

// //function expressions
// const getAnimalSoundFunc = function(animal){
//     if(animal=="cat"){
//             return meow
//         }
//     if(animal=="dog"){
//             return woof
//     }
// }

// getAnimalSoundFunc("dog")() //will print meow



//function decleeration
// function greet(){
//     console.log("Hello there, from the wild, wild West")
//   }

  // Deferint between both

// greet() //works without a problem
//greetExpression() //throws an error



// const greetExpression = function(){
//   console.log("Uh oh")
// }




// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like "+food)
//     }
//   }

// console.log(person.name) //you know what this will do

// person.speak("cheese toast") //and this? Try it out!

//excersies 1
// const isEven = function(num){
//     if(num%2==0)
//         return true
//     return false
// }
// console.log(isEven(1))


//excersies 2
// function evenOrodd(arr){
//     for(i in arr){
//         if (isEven(arr[i])){
//             console.log("Even")
//         }
//         else{
//             console.log("Odd")
//         }
//     }
// }

// evenOrodd([1,2,3,4])

//excersie 3
// function checkExists(arr,num){
//     for(i in arr){
//         if(arr[i]==num){
//             return true
//         }
//     }
//     return false
// }
// console.log(checkExists([1, 2, 3], 2))
// console.log(checkExists([1, 2, 3], 5))


//excersies 4

const calculator = {
    add: function(num1,num2){
        return num1+num2
    },
    subtract: function(num1,num2){
        return num1-num2
    }
}

const result1 = calculator.add(25, 51)
const result2 = calculator.subtract(31, 15)

console.log(calculator.add(result1, result2)) //should print 42



// //excersise 5 extra
// function increaseByNameLength(money , name){
//     return name.length*money
// }
// function makeRegal(name){
//     return "His Royal Highness,"
// }

// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 200) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
