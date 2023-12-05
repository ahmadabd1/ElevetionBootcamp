

let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]


const ages = [32, 33, 16, 40];
//filter method array
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
let ages1 = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

let olderThan16 = ages1.filter(a => a > 16)
console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]

//forach methods array
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));


//map methods array
const array2 = [1, 4, 9, 16];

const map1 = array2.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]



//find method array
let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]
const findById = id => posts.find(p => p.id === id)
console.log(findById(2)) // prints {id: 1, text: "Find me", comments: Array(3)}


//every methods array
let age = [31, 28, 23, 27, 25, 16, 24]
console.log(age.every(a => a > 18)) //returns false

// Chaining Methods array
let countries = [
    { name: "Greece", population: 500 },
    { name: "Namibia", population: 1200 },
    { name: "Finland", population: 100 },
    { name: "Switzerland", population: 300 },
    { name: "Peru", population: 200 }
]

let smallCountries = countries.filter(c => c.population < 500).map(c => c.name)
console.log(smallCountries)

const people = [
    {id: 1, name: "Humbert", money: 499, hasAC: false},
    {id: 2, name: "Bellatrix", money: 499, hasAC: true},
    {id: 3, name: "Mola", money: 720, hasAC: false}
]

let isCool = function(humbert){
    return (humbert.money > 500 || humbert.hasAC)
}

let print = (p) => console.log(p)

people.filter(isCool).map(p => p.name).forEach(print)
console.log(people.find(p.id === 2))