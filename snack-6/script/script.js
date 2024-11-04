/*

Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

*/

'use strict';
console.clear();

//Chiedo all'utente di inserire un numero
const N = parseInt(prompt("Inserisci un numero"));

//Condizione per verificare la validità del numero
if (!isNaN(N) && N > 0) {
    console.log(`Cubo dei primi ${N} numeri:`);
    
    //Ciclo per prendere tutti i numeri prima di N
    for (let i = 1; i <= N; i++) {
        //Per fare il cubo
        const cubo = Math.pow(i, 3);
        console.log(`Il cubo di ${i} è ${cubo}`);
    }
} else {
    console.log("Il numero inserito non è valido");
}
