/*

Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

*/

'use strict';
console.clear();

//Creo un array per inserire poi i numeri dispari
const empty = [];

//Uso il ciclo for per chiedere 6 numeri all'utente
for (let i = 0; i < 6; i++) {
    const num = parseInt(prompt("Inserisci un numero"));
    //Condizione per verificare la validità del numero
    if (!isNaN(num)) {
        //Condizione per inserire i numeri dispari nell'array
        if (num % 2 !== 0) {
            empty.push(num);
        } else {
            alert ("Il numero inserito è pari");
        }
    } else {
        alert ("Inserisci un numero valido");
        i--;
    }  
}
console.log(empty);