
function style (text, colorCode) {
  return "\033[" + colorCode + "m" + text + "\033[0m";
}

function green(text) {
  return style(text, "32");  
}

function red(text) {
  return style(text, "31"); 
}

function yellow(text) {
  return style(text, "33"); 
}

function underline(text) {
  return  style(text, "4");
}

function print (headline){
  console.log(yellow((underline(headline))));
}


function testArray (programOutput, expectedOutput, testTitle) {
  const newline = "\n";
  const expectedVsActual = newline + " Expected : " + green(expectedOutput) + newline + "  Actual : " + red(programOutput);
  const failedInfo = "❌ " + testTitle + expectedVsActual;  
  const passedInfo = "✅ " + testTitle;

  const result = areEqual(expectedOutput, programOutput) ? passedInfo : failedInfo;
  console.log(result); 
}

function test (programOutput, expectedOutput, testTitle) {
  const newline = "\n";
  const expectedVsActual = newline + " Expected : " + green(expectedOutput) + newline + "  Actual : " + red(programOutput);
  const failedInfo = "❌ " + testTitle + expectedVsActual;  
  const passedInfo = "✅ " + testTitle;

  const result = (expectedOutput === programOutput) ? passedInfo : failedInfo;
  console.log(result); 
}


//--------------------------------------- Are two arrays are equal ----------------------------------------------//


function areEqual(array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;

  if (length1 !== length2) {
    return false;
  }

  for(let index = 0 ; index < length1 ; index++) {
    if(array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}


function testArrayEquality(){
  headline = "Test whether two arrays are equal or not"

  print(headline);

  test(areEqual([1, 3, 5], [ 1, 3]), false, "if the arrays are of different length ans should be false");
  test(areEqual([ 1, 2, 3], [ 1, 3, 2]), false, "if the values of two array are   different ans should be false ");
  test(areEqual([1, 3, 5], [ 1, 3, 5]), true, "if both the arrays contains same values ");

}





//------------------------------------------------------ Select Odd Numbers -----------------------------------------------------------------//

function isOdd(n) {
  return (n % 2 !== 0);
}

function filterOdds (list) {
  const Odds = [];

  for (let index = 0 ; index < list.length ; index++) {
    if (isOdd(list[index])) {
      Odds.push(list[index]);
    }
  }
  return Odds;
}

function testFilterOdds (){
  headline = "Filter odd numbers from a list"

  print(headline);

  testArray(filterOdds([]), [], "empty string");
  testArray(filterOdds([3, 5, 9, 7]), [3, 5, 9, 7], "all elements are odd");
  testArray(filterOdds([2, 6, 8, 4]), [], "if all elements are even");
  testArray(filterOdds([3, 6, 5, 4]), [3, 5], "some elements are odd some are even");
}




//------------------------------------------------------ Select even  Numbers ---------------------------------------------------------------//

function isEven(n) {
  return (n % 2 === 0);
}

function filterEvens (list) {
  const evens = [];

  for (let index = 0 ; index < list.length ; index++) {
    if (isEven(list[index])) {
      evens.push(list[index]);
    }
  }
  return evens;
}


function testSlectingEvenNumbers (){
  headline = " Filter even numbers from a list of numbers";

  print(headline);

  testArray(filterEvens([2, 4, 6, 8]), [2, 4, 6, 8], "all elements are even");
  testArray(filterEvens([1, 3, 5, 7]), [], "all elements are odd");
  testArray(filterEvens([3, 6, 5, 4]), [6, 4], "some elements are odd some are even");
}




//------------------------------------------------------ Sum of N numbers ------------------------------------------------------//

function sumOfNumbers (list) {
  let sum = 0;

  for(let index = 0; index < list.length; index++ ) {
    sum = sum + list[index];
  }

  return sum;
}


function testSumOfNumbers (){
  headline = "Sum of n numbers of a list";
  print(headline);

  test(sumOfNumbers([]), 0, "sum of empty array ");
  test(sumOfNumbers([ 2, 4, 6, ]), 12, "sum of all positive number");
  test(sumOfNumbers([ -2, -9, -4]), -15, "sum of all negative number ");
}


//------------------------------------------------------ Product of N numbers ------------------------------------------------------//

function productOfNumbers (list) {
  let product = 1;

  for(let index = 0; index < list.length; index++ ) {
    product = product * list[index];
  }
  return product;
}

function testProductOfNumbers (){
  headline = "Product of n numbers of a list";

  print(headline);

  test(productOfNumbers([]), 1, "prduct of empty array " );
  test(productOfNumbers([ 2, 4, 6, ]), 48, "prduct of all positive number");
  test(productOfNumbers([ -2, -3, -4]), -24, "prduct of odd no of negative number ");
  test(productOfNumbers([ -2, -3, -4, -10]), 240, "prduct of even no of negative number ");
}




//----------------------------------------- Reverse an Array -------------------------------------------------------------------//

function reverseArray (list) {
  const reversedList = [];

  for (let index = list.length - 1; index >=0 ; index--) {
    reversedList.push(list[index]);
  }
  return reversedList;
}

function testReverseArray(){
  headline = "Reversing an array";

  print(headline);

  testArray(reverseArray([]), [], "reversing of empty array is empty array");
  testArray(reverseArray([3]), [3]);
  testArray(reverseArray([1, 4, 5]), [5, 4, 1], "reversing of array with more than one element");
}



//------------------------------------ Is given element present in the list ------------------------------------------------------//

function isElementPresent (list, element) {
  let index = 0;

  while (index < list.length) {
    if (element === list[index]) {
      return true;
    }
    index ++;
  }
  return false;
}

function testIsElementPresent(){
  headline = "Check whether a given element is present in a list or not";

  print(headline);

  test(isElementPresent([], 5), false, "for an empty array ans should be false");
  test(isElementPresent([ 1, 5, 7, 8 ], 8), true, "If the element is present ans should be true");
  test(isElementPresent([1, 5, 7, 8 ], 10), false, "If the element is not present ans should be false");
}



//------------------------------------ Index of an given element in an array ---------------------------------------------------//


function indexOf (list, element) {
  let index = 0;

  while(index < list.length) {
    if (element === list[index]) {
      return index;
    }
    index ++ ;
  }
  return -1;
}

function testIndexOfGivenElemement (){
  headline = "Find the index of a given element in a list if present";

  print(headline);

  test(indexOf([], 5), -1, "for an empty array ans should be -1");
  test(indexOf([ 1, 5, 7, 8 ], 8), 3, "If the element is present ans should be the correct index");
  test(indexOf([1, 5, 7, 8 ], 10), -1, "If the element is not present ans should be -1");
}



//----------------------------------- N terms of Fibonacci in reverse Order --------------------------------------------------------//


function reverseFibonacciSeries(noOfTerms) {
  const list = [];
  let lastTerm = 0;
  let secondLastTerm = 1;
  let nextTerm;

  for (let index = noOfTerms - 1; index >= 0 ; index--) {
    list[index] =lastTerm;
    nextTerm = lastTerm + secondLastTerm;
    lastTerm = secondLastTerm;
    secondLastTerm = nextTerm;
  }
  return list;
}


function testReverseFibonacciSeries(){
  headline = "Fibonacci Series in reverse";

  print(headline);

  testArray(reverseFibonacciSeries(0), [], "when no of terms is 0 , ans should be an empty array");
  testArray(reverseFibonacciSeries(1), [0], "when no of terms is 1 ans should be an array conatainig 0");
  testArray(reverseFibonacciSeries(2), [ 1, 0 ], "when no of terms is 2 ans should be an array conatainig 1,0");
  testArray(reverseFibonacciSeries(5), [ 3, 2, 5, 1, 0 ], "when no of terms is more than 2");

}



//--------------------------------------  List of length of names ------------------------------------------------------//

function lengthsOfWords (list) {
  let lengths = [] ;

  for (let index = 0 ; index < list.length ; index++) {
    lengths.push(list[index].length);       
  }

  return lengths;
}


function testGenerateLengthOfWords(){
  headline = "Find the length of each words in a list";

  print(headline);

  testArray(lengthsOfWords([ "swagato", "sauma", "hello" ]), [ 7, 5, 5], " when the list is not empty ");
  testArray(lengthsOfWords([]), [], " when the list is empty we will get an empty list");
}



//---------------------------------------- Is a string Palindrome --------------------------------------------------------------//  

function isPalindrome (string) {
  let beginIndex = 0;
  let endIndex = string.length - 1;

  while (beginIndex < endIndex) {
    if (string[beginIndex] !== string[endIndex]) {
      return false;
    }

    beginIndex ++;
    endIndex -- ;
  }
  return true;
}


function testIsPalindrome(){
  headline = "Check whether a given string is palindrome or not";

  print(headline);

  test(isPalindrome("a"), true, " Single character is palindromic");
  test(isPalindrome("malayalam"), true, " Palindromic string of odd length");
  test(isPalindrome("abba"), true, "Palindromic string of even length");
}



//------------------------------------- Check if a string contains a given character ---------------------------------------// 


function isCharacterPresent (string, character) {
  let index = 0;

  while (index < string.length) {
    if (character === string[index]) {
      return true;
    }
    index++;
  }

  return false;
}

function testIsCharacterPresent(){
  headline = "Check whether a given character is present in a string";

  print(headline);

  test(isCharacterPresent("", "a"), false, "for an empty array ans should be false");
  test(isCharacterPresent("sauma", "m"), true, "If the character is present ans should be true");
  test(isCharacterPresent("manjeet", "s"), false, "If the character is not present ans should be false");
}



//------------------------------------------ Reversing a string ---------------------------------------------------------------------//



function reverseString (string) {
  const reversedString = "";

  for (let index = string.length - 1; index >=0 ; index--) {
    reversedString = reversedString + string[index];
  }
  return reversedString;
}

function testReverseString(){
  headline = "revesing a string";

  print(headline);

  test(reverseString(""), "", "reversing of empty string is empty string");
  test(reverseString("r"), "r", "reverse of a single character is the character itself ");
  test(reverseString("raj"), "jar", "reversing of string with more than one element");
}




//----------------------------------------- Last Index at which given character is present ----------------------------------------//



function lastIndex (string, character) {
  let index = string.length - 1;

  while(index >= 0) {
    if (character === string[index]) {
      return index;
    }
    index -- ;
  }
  return -1;
}

function testLastIndex(){
  headline = "Find the last index at which a given character is present";

  print(headline);

  test(lastIndex("", "a"), -1, "for an empty array ans should be -1");
  test(lastIndex("sauma", "a"), 4, "If the character is present ans should be correct Index");
  test(lastIndex("manjeet", "b"), -1, "If the character is not present ans should be -1");
}





//------------------------------ Generate array of words from a string -------------------------------------------------//

function listOfWords (sentence) {
  let word = "";
  const words = [];
  sentence = sentence + " ";

  for(let index = 0 ; index < sentence.length ; index++ ) {

    if (sentence[index] !== " "){
      word = word + sentence[index];
    }

    else if (word !== ""){
      words.push(word);
      word = "";
    }
  }

  return words;
}

function testListOfWords(){
  headline = "Generate array of words from a string";

  print(headline);

  testArray(listOfWords(""), [], "empty string should return empty string" );
  testArray(listOfWords("Hello,     this is ashish.  Today is an awesome day"),
    ["Hello,", "this", "is", "ashish.", "Today", "is", "an", "awesome", "day" ], "sentence with multiple words" );

}









function runTest() {
  testFilterOdds();
  testSlectingEvenNumbers();
  testSumOfNumbers();
  testProductOfNumbers();
  testReverseArray();
  testIsElementPresent();
  testIndexOfGivenElemement();

  testReverseFibonacciSeries();
  testArrayEquality();
  testGenerateLengthOfWords();
  testIsPalindrome();
  testIsCharacterPresent();
  testLastIndex();
  testListOfWords();
}

runTest();

