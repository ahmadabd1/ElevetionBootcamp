
//ex1
const sum = (x,y,z)=> x+y+z
console.log(sum(4,5,6))

// ex2
const capitalize = name =>{
    first = name.slice(0,1).toUpperCase()
    res = name.slice(1).toLowerCase()
    console.log(first+res)

}
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

//ex3



const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
const commentOnWeather = temp => console.log("It's " + determineWeather(temp))

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"


//ex4
