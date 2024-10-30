// Byt ut vissa element i en array

const colors = ["red", "blue", "green", "blue", "yellow"];
const newColor = "purple";

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "blue") {
    colors[i] = newColor;
  }
}

console.log(colors); // Output: ["red", "purple", "green", "purple", "yellow"]
