function toInt(str) {
    return parseInt(str)
}
console.log(toInt("20.44"))


function toIntWithRadix(str) {
    return parseInt(str,2)
}
console.log(toIntWithRadix("101100"))


function toFloat(str) {
    return parseFloat(str)
}
console.log(toFloat("20.44"))