const StringFormatter = function () {
    const capitalizeFirst = function (str) {
        res=str[0].toUpperCase()
        res+=str.slice(1).toLowerCase()
        return res;
    }

    const toSkewerCase = function (str) {
        return str.replace(" ","-");
    }

    return {
        capitalizeFirst,
        toSkewerCase
    }
}
const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box