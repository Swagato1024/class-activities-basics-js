function skipSpaces (sentence) {

  return (filterWords(sentence.substring(1)));
}

function filterWords (sentence) {
  if (sentence.length === 0) {
    return [];
  }

  let  word = '';
  let index = 0;
  let  remaining;


  while (sentence[index] !== " " && index < sentence.length) {
    word = word + sentence[index];
    index++;
  }

  if (sentence[index] === undefined) {
    remaining = "";
  }

  remaining = sentence.substring(index);
  wordsSofar = skipSpaces(remaining);

  return (word=== "") ? [].concat(wordsSofar) : [word].concat(wordsSofar);
}

console.log(filterWords(" riya ghosal"));
