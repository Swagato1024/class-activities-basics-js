/* Determine how much your money can grow using the power of compound interest
Compound Interest = Interest on principal + Interest over existing interest
compoundedAmount (p,r,t) = compoundedAmount(p,r,t-1) + S.I on compoundedAmount from (t-1)th year
 */


function simpleInterest (principal, rateOfInterest, years) {
  return (principal * rateOfInterest * years) / 100 ;
}

function compoundedAmount (amount, rateOfInterest, years) {
  if(years == 0) {
    return amount;
  }

  const  amountSoFar = compoundedAmount(amount, rateOfInterest, years - 1);

  return amountSoFar + simpleInterest(amountSoFar, rateOfInterest, 1);
}

function compoundInterest (principal, rateOfInterest, years) {
  return compoundedAmount(principal, rateOfInterest, years) - principal;
}






/*
-----------------------------------------Testing-------------------------------------------------
 */

function test (testTitle,  programOutput, actualOutput) {
  const result = (actualOutput == programOutput) ? " ✅ " : " ❌ " ;

  console.log(result + testTitle + " : " + "Actual : " + actualOutput + " ......." + " Expected : " + programOutput);
}

console.log("compoundInterest");

test(" Compound  Interest when year  is more than 1 ", compoundInterest(1000, 10, 3), 331);
test(" Compoud Interest in zero time will be zero ", compoundInterest(1000, 10, 0), 0);




