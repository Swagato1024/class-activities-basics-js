const util = require('../lib/utility.js');

function factorial (n) {
  return n < 2 ? 1 : n * factorial(n - 1);
}

const main = function () {
  const numberedString = process.argv[2];
  const n = util.toDecimal(numberedString);
  console.log(factorial(n));
}  

main();
