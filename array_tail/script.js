/* Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let numberOfElements = parseInt(prompt("Quanti elementi vuoi inserire nell'array?"))

let numbersContainer = [];

for(let i = 0; i < numberOfElements; i++) {
    let rndNumber =  getRndInteger(1, 100)

}