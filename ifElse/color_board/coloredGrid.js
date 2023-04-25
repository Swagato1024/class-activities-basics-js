let row = 0;
let col = 0;
let pattern = "";
const newline = "\n";

while (row < 8) {
  while(col < 8) {
    pattern = pattern + ((row + col) % 3) + " ";
    col = col + 1;
  }
  pattern = pattern + newline;
  row = row +1;
  col = 0;
}

console.log(pattern);
