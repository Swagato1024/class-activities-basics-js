
// Determining If a Point Lies Inside of a Circle Given the Center Point & a Radius

function distanceBetweenTwoPoints (x1, y1, x2, y2) {

  const  deltaX = x2 - x1;
  const  deltaY = y2 - y1;

  const  sqOfDeltaX = Math.pow(deltaX, 2);
  const  sqOfDeltaY = Math.pow(deltaY, 2);

  return  Math.sqrt(sqOfDeltaX + sqOfDeltaY);
}

function isPointInsideCircle(x, y, cx1, cy1, radius) {

  const distanceFromCenter = distanceBetweenTwoPoints(x, y, cx1, cy1);

  return (distanceFromCenter <= radius);

}



/*
-----------------------------------------Testing-------------------------------------------------
 */

function test (testTitle,  programOutput, actualOutput) {
  const result = (actualOutput == programOutput) ? " ✅ "  : " ❌ " ;

  console.log(result + testTitle ); 
}

console.log("is point inside circle");

test("when point is outside of the circle ans should be false ", isPointInsideCircle(2, 6, 0, 0, 4), false);
test("when point is on the circumference ans should be true ", isPointInsideCircle(4, 0, 0, 0, 4), true);
test("when point is inside the circle ans should be true ", isPointInsideCircle(3, 2, 0, 0, 4), true);



