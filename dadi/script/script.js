/*

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

'use strict';
console.clear();

//Genero un numero casuale tra 1 e 6 per il computer
const numComputer = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log("Punteggio computer: " + numComputer);

//Genero un numero casuale da 1 a 6 per l'utente
const numUser = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log("Punteggio utente: " + numUser);

//Variabile testo
let text;

//Condizione per stabilire il vinciore
if (numComputer > numUser) {
    text = "Il computer ha vinto! Ritenta, sarai più fortunato!";
} else if (numUser > numComputer) {
    text = "Congratulazioni! Hai vinto!";
} else {
    text = "Pareggio!";
}
console.log(text);