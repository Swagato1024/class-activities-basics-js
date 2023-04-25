// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, … and so on.

function fibonacci (n) {
  if (n == 1) {
    return 0;
  }

  if (n == 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}






/*
-----------------------------------------Testing-------------------------------------------------
 */

function test (testTitle,  programOutput, actualOutput) {

  const failedInfo = "❌ " + testTitle + " Expected : " + actualOutput + " Program Output : " + programOutput;
  const passedInfo = "✅ " + testTitle + " passed";

  const result = (actualOutput == programOutput) ? passedInfo : failedInfo;

  console.log(result); 
}

console.log("fibonacci");

test("1st term of fibonacci is 0 ", fibonacci(1), 0);
test("2nd term of fibonacci is 1 ", fibonacci(2), 2);
test("6th term of fibonacci is 5 ", fibonacci(6), 5);



