/*
Factorial of a positive integer (number) is the sum of multiplication of all the integers smaller than that
positive integer. 
For example, factorial of 5 is 5 * 4 *  3 * 2 * 1 which equals to 120.
 */


function factorial (n) {
  return (n < 2) ? 1 : (n * factorial(n-1)); 
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

