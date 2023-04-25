function binaryToDecimal(binarySequence, digits) {

  if(binarySequence <= 1) {
    return (binarySequence * Math.pow(2,digits));
  }
  const power = ( digits != undefined ) ? digits : 0 ;

  const lsb = (binarySequence % 10);
  
  const remainingSeq = Math.floor(binarySequence / 10);

  const placeValue = Math.pow(2,power);

  const sumOfDigits = binaryToDecimal(remainingSeq , power +1);
  
  const  decimalNum = (lsb * placeValue) + sumOfDigits; 

  return decimalNum;
  
}

console.log(binaryToDecimal(111));
