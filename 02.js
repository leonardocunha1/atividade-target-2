/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

const string = "tEsTe de sTrIng pAra desCObRIr a quAntIdade de leTrAs a";
const stringLower = string.toLowerCase();

const count = stringLower.split("").filter((char) => char === "a").length;

if (count > 0) {
  console.log(`A letra 'a' (ou 'A') aparece ${count} vezes na string.`);
} else {
  console.log("A letra 'a' (ou 'A') não aparece na string.");
}

// Maneira sem métodos
let count2 = 0;

for (let i = 0; i < string.length; i++) {
  if (stringLower[i] === "a") {
    count2 += 1;
  }
}

if (count2 > 0) {
  console.log(`A letra 'a' (ou 'A') aparece ${count2} vezes na string.`);
} else {
  console.log("A letra 'a' (ou 'A') não aparece na string.");
}
