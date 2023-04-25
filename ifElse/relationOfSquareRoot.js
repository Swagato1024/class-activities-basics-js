// Program to check from given two numbers, whether one is square of another or not

const number1 = 64;
const number2 = 8;

const sqOfNumber1 = number1 * number1;
const sqOfNumber2 = number2 * number2;

let message    = "None is square of another";
const message1 = number1 +" is square of " + number2;
const message2 = number2 +" is square of " + number1;

if (number1 == sqOfNumber2) { 
  message = message1;
} 

if (number2 == sqOfNumber1) { 
  message = message2;
} 

console.log(message);


