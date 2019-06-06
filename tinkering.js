function multiply(a, b) {
  return a * b;
}
// console.log(multiply(2,4));

function createWhitespace(string1, string2) {
  return string1 + "\n" + string2;
}
// console.log(createWhitespace("hello", "Im Doug"));

var i = 10, j = 20;
// console.log(i + j);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = true;

 
var category = eatsPlants ? eatsAnimals ? "omnivore" : "herbivore" : eatsAnimals ? "carnivore" : undefined;  

// console.log(category);

var thirsty = true;
var cola = false;
var drink = thirsty && cola ? "cococola" : cola ? "you're fat" : thirsty ? "juice" : "natta";
// console.log(drink);

/* Fizz-Bop exercise... ***
var x = 1;

while (x <= 20) {
    if (x % 3 === 0) {
        if (x % 5 === 0) console.log("JuliaJames");
        console.log("Julia");
    } else if (x % 5 === 0) {
        if (x % 3 === 0) console.log("JuliaJames");
        console.log("James");
    } else console.log(x);
    
    x ++;
    
}
*** end FizzBop exercise */ 

