function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

function howManyHundreds(num) {
  var answer = Math.trunc(num / 100);
  return answer;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);