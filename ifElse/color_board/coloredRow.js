const styleBegin = "\033["
const styleEnd = "\033[0m"
const colorCode = 41
let currentColor 

let column = 0
let row = ""

currentColor = colorCode + column
row = row + styleBegin + currentColor+ "m" + "  " + styleEnd
column++


currentColor = colorCode + column
row = row + styleBegin + currentColor+ "m" + "  " + styleEnd
column++

currentColor = colorCode + column
row = row + styleBegin + currentColor+ "m" + "  " + styleEnd
column++

console.log(row)
