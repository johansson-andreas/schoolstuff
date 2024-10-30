// Beräkna genomsnittet av alla tal i en array

const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;
console.log("Genomsnittet är: " + average);