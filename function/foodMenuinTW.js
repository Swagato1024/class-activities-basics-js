/* 
Enjoy food in ThoughtWorks
 */

function joinByComa (a, b, c) {
  return (a + "," + b + "," + c);
}

function getMenu (day) {

  const idly = "IDLY";
  const sambar = "SAMBAR";
  const chutney = "CHUTNEY";
  const aluParatha = "ALU PARATHA";
  const khichdi = "KHICHDI";

  switch (day) {
    case "MONDAY" : return joinByComa(idly, sambar, chutney);
    case "TUESDAY" : return ".....";
    case "WEDNESDAY" : return "...";
    default: return  "NO FOOD";
  }

}

console.log(getMenu("MONDAY"));
console.log(getMenu("SUNDAY"));
