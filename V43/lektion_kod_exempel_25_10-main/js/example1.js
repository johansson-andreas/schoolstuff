// Hitta det största talet i en array

const numbers = [3, 56, 2, 78, 43, 10];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    if(numbers[i])
    max = numbers[i];
  }
}

console.log("Det största talet är: " + max);