const str1 = "Hello";
const str2 = "World";

function msgWelcome() {
    console.log(str1 + ", " + str2 + "!");
}
function addnum(num1, num2) {
    let sum = num1 + num2;
    console.log('Sum is: ' + sum);
}

const getClicked = {    
    sayHello: function func(){
        console.log("Hello")
        },
    buttonMe: "Click me",
    isCLicked: function() {
        console.log("Button clicked!");
        }
};

const weather = {
    temp: 24,
    weatherType: "sunny",
    printWeather: function() {
        console.log(`It is ${this.weatherType} and the temperature is ${this.temp} °C.`);
    }
};

msgWelcome();
weather.printWeather();
getClicked.isCLicked();
addnum(5, 3);
