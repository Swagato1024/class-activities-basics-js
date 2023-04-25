//Program to check whether a given year is leap year or not

const year = 2100;

const isDivisibleBy_400 = (year % 400 == 0) ;
const isDivisibleBy_100 = (year % 100 == 0);
const isDivisibleBy_4   = (year % 4 == 0 );

const isLeapYear = isDivisibleBy_100 ? isDivisibleBy_400 : isDivisibleBy_4;

let message = year + " is not a Leap year ";
const message1 = year + " is a Leap year ";

if (isLeapYear) { 
  message = message1;
} 

console.log(message);

