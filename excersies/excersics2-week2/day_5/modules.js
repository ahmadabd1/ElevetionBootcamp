const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}
const operator = mathOperations()
console.log(operator.add(13,29))
console.log(operator.sub(10,6))
console.log(operator.mult(1.75,24))
console.log(operator.mult(7,operator.div(36,6)))