var validator = require('validator');


//EX 1

console.log(validator.isEmail('shoobert@dylan')) //=> true

//EX 2
console.log(validator.isMobilePhone("786-329-9958",["en-US"]))

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist))
console.log(validator.whitelist(text, blacklist))