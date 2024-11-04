/*

Stampa le potenze di 2 fino a 1000

*/

'use strict';
console.clear();

//Inizializzo le variabili
const n = 2;
let powN;

console.log("Le potenze di 2 fino a 1000 sono:")

//Ciclo per aumentare l'esponente di 2
for (let i = 0; i <= 10; i++) {
    powN = Math.pow(n, i);
    //Condizione per la quale la potenza si ferma prima di 1000
    if (powN < 1000) {
        console.log(`2^${i} = ${powN}`)
    }
}