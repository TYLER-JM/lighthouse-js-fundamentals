var ingredients = ["eggs",
                   "milk",
                   "flour",
                   "sugar",
                   "baking soda",
                   "baking powder",
                   "chocolate chips",
                   "bananas"
                 ];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
}
console.log("\n")
// Write a for loop that prints out the contents of ingredients:
for (i=0; i<ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\n")
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (j = ingredients.length - 1; j >= 0; j--) {
  console.log(ingredients[j]);
}
console.log("\n");