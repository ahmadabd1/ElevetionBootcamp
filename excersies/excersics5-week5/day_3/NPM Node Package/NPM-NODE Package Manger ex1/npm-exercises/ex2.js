// CJS
const { faker } = require('@faker-js/faker');

const makeHuman =(number)=>{
    for(let i=0;i<number;i++){
        makePerson()
    }
}

const makePerson=function(){
    console.log(`${faker.person.firstName()}, ${faker.image.avatar()}, ${faker.company.name()}`)
}
makeHuman(2) //prints the following: