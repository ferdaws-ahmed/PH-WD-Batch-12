
var haveMoney = 500;
var perTime = 75;

var howManyTimes = haveMoney / perTime;

var remainingBalance = haveMoney % perTime;

console.log('How many time use : ' + howManyTimes.toFixed(2));
console.log('REmaining Balance : ' + remainingBalance);