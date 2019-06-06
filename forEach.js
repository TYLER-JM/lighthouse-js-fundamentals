/* Modifying an array using the forEach() method
 * using two arguments: the element and its INDEX
 */

let test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];
let modifiedTest = [];
test.forEach(function(elem, index) {
  if (elem % 3 === 0) {
    test.splice(index, 1, elem + 100);
    // modifiedTest.push(elem += 100);
  } 
  // else modifiedTest.push(elem);
});
console.log(test);
