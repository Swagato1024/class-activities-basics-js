
function sumOfTwo (x, y) {
  return x + y ;
}

function sumOfThree (x, y, z) {
  return sumOfTwo(sumOfTwo(x, y), z);
}

function avgOfFive (a, b, c, d, e) {
  const sumOfFive = sumOfThree(sumOfThree(a, b, c), d, e);

  return (sumOfFive / 5);
}

console.log(avgOfFive(1, 2, 3, 4, 5));
console.log(avgOfFive(-1, 2, 0, 4, -5));




/*
-----------------------------------------Testing-------------------------------------------------
 */

function test (testTitle,  programOutput, actualOutput) {
  const result = (actualOutput == programOutput) ? " ✅ "  : " ❌ " ;

  console.log(result + testTitle + " : " + "Actual : " + actualOutput  + " Expected : " + programOutput);
}

console.log("avg of 5 numbers");

test(" all numbers are positive ", avgOfFive(1, 2, 3, 4, 5), 3);
test(" when some numbers  are negetive ",  avgOfFive(-1, 2, 0, 4, -5), 0);


