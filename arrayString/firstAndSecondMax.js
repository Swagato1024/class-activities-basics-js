function firstAndSecondmax (list) {
  const listLength = list.length;

  let maxTwoSoFar = [ -Infinity, -Infinity ];

  if (listLength === 0 ) {
    return maxTwoSoFar;
  }

  if (listLength === 1) {
    maxTwoSoFar[0] = list[0];
    return maxTwoSoFar;
  }

  maxTwoSoFar[0] = Math.max(list[0], list[1]);
  maxTwoSoFar[1] = Math.min(list[0], list[1]);

  const maxTwoOfRest  = firstAndSecondmax(list.slice(2));

  if (maxTwoSoFar[0] > maxTwoOfRest[0]) {
    maxTwoSoFar[1] = Math.max(maxTwoSoFar[1], maxTwoOfRest[0]);
    return maxTwoSoFar;
  }

  if (maxTwoSoFar[0] < maxTwoOfRest[0]) {
    maxTwoSoFar[1] = maxTwoSoFar[0];
    maxTwoSoFar[0] = maxTwoOfRest[0];
    maxTwoSoFar[1] = Math.max(maxTwoSoFar[1], maxTwoOfRest[1]);

    return maxTwoSoFar;
  }
}

console.log(firstAndSecondmax([6,2,7,3]));
console.log(firstAndSecondmax([6,2,4,3]));
console.log(firstAndSecondmax([6,2,9,8]));
console.log(firstAndSecondmax([9,8,6,2]));
console.log(firstAndSecondmax([6,2,7,3,19]));
console.log(firstAndSecondmax([]));
