// Räkna antalet gånger ett visst element finns i en array

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];
let count = 0;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "apple") {
    count++;
  }
}

console.log("Antalet 'apple' är: " + count);