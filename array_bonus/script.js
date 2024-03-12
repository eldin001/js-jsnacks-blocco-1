/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

let firstArray = [1, 2, 3, 4];
let secondArray = [1, 2];

let difference = firstArray.length - secondArray.length;

/* console.log(difference); */

for(let i = 0; i < difference; i++) {
    secondArray.push(i);
}

console.log(firstArray);
console.log(secondArray);