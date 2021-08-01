// Integer type variable
var integerVariable = 40; 
console.log(integerVariable);
console.log(typeof(integerVariable));

// Float type variable
var floatVariable = 30.4856;
console.log(floatVariable);
console.log(typeof(floatVariable));

// String type variable
var stringVariable = "507";
console.log(stringVariable);
console.log(typeof(stringVariable));

//Boolean type variable
var booleanVariable = true;
console.log(booleanVariable);
console.log(typeof(booleanVariable));

//Parsing the string data and adding with integer

 var stringToNumber = parseInt(stringVariable);
 var total = integerVariable + stringToNumber;
 console.log(total);

//Generating random values between 10 to 20

var lowerLimit = 10;
var upperLimit = 20;
var limitDifference = upperLimit - lowerLimit;
var randomValue = (Math.random() * lowerLimit) + limitDifference;
console.log(Math.round(randomValue));
