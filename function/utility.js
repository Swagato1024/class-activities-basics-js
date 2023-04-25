function max (x, y) {
  return (x > y) ? x : y ;
}

function maxOfThree (x,y,z) {
  return max(max(x, y), z);
}

function isOdd (n) {
  return (n % 2 != 0);
}

function isEven (n) {
  return (n % 2 == 0);
}

function isDivisible(dividant, divisor) {
  return (dividant % divisor == 0);
}

function isPrime(n) {
  let possibleFactor = 2;
  let sqRootOfN = Math.sqrt(n);

  while (possibleFactor <= sqRootOfN) {
    if(isDivisible(n, possibleFactor)) {
      return false ;
    }

    possibleFactor ++ ;
  }

  return true;
}

/*
console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(1));
 */

console.log(maxOfThree(10, 6, 9));
console.log(maxOfThree(-10, -6, -9));
console.log(maxOfThree(12, 0, 4));
console.log(maxOfThree(17, 5, 9)); 
