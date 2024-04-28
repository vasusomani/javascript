function randomFraction() {
    return Math.random()
}
console.log(randomFraction())


function randomNumber() {
    return Math.floor(Math.random()*20) //Between 0 and 19
}
console.log(randomNumber())


function randomNumberByRange(min, max) {
    var diff = max - min;
    return Math.floor(Math.random()*(diff+1)+min)
}
console.log(randomNumberByRange(10,20))