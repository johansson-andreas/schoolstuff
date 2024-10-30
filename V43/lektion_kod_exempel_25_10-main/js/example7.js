// Rensa upp en CSV-sträng (komma-separerad sträng)
// Exampel: "mjölk, papper ,   ost , ägg" => "mjölk, papper, ost, ägg"

// Metoder: 
// string.split(",") - splittar en sträng till en array vid ","
// string.join(" ") - slår ihop en array till en sträng med delare " "

const csvString = "mjölk, papper ,   ost , ägg";

const words = csvString.split(",");
console.log(words)

for(let i = 0; i < words.length; i++) {
  words[i] = words[i].trim();
}

const cleanedCSV = words.join(", ")

console.log(cleanedCSV)