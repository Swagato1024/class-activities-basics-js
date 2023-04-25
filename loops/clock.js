// printing a clock face

let radius = 3

for(let x = -10 ; x < 10 ; x++) {
  for(let y = -10 ; y < 10 ; y++) {

     let distance = Math.sqrt(x * x + y * y)
     if(distance == radius) {
       console.log("*")
     }
    else {
       console.log(" ")
    }
  }
}
