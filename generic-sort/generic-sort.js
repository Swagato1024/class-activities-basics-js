
const sort = function (list, desiredOrder)
for (let pass = 0 ; pass < list.length; pass++) {
  for (let index = 0 ; index < list.length - pass; index++) {
    if ( list[index] > list[index] ) {
      const temp = list[index];
      list[index + 1] = list[index];

    }
  }
}
