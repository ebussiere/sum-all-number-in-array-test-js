function sumItems(array) {
  let result = 0;
  function inner(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(i)) {
        inner(i);
      } else {
        result = result + i;
      }
    };
  }
  inner(array);
  return result;
}




// function sumItems(array) {
//   for (const a of array) {
//     if (Array.isArray(a)) {
//       return sumItems(a);
//     } else {
//       console.log(a);
//       //sum = sum + a;
//     }
//   }
// }
module.exports = sumItems;