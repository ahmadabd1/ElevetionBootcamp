const title = "Circle Utility";
const pi = 3.14159;

const calcCircleArea = function (radius) {
    return pi * radius * radius;
};

// module.exports.pi = pi;
// module.exports.calcCircleArea = calcCircleArea;
// module.exports.title = title;


const dbName = "SQL_DB_1102"
const dbPassword = "e3!accT"

module.exports = {
    dbName: dbName,
    dbPassword: dbPassword,
    pi: pi,
    calcCircleArea: calcCircleArea,
    title: title
}