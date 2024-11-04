/*

Calcola la somma e la media dei primi 10 numeri

*/

'use strict';
console.clear();

//Inizializzo le variabili
const num = 10;
let sum = 0;
let m;

//Ciclo per prendere tutti i numeri fino a 10
for (let i = 1 ; i <= num; i++) {
    //Calcolo somma
    sum += i; 
}

//Calcolo media
m = sum / num;
console.log(`La somma dei primi 10 numeri è ${sum}, mentre la media è ${m}`);
