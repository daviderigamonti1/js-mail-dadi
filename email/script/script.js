/*

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email

*/

'use strict';
console.clear();

//Creo un array con delle email pre-impostate

const emailsAuthorized = [
    'pippo@gmail.com',
    'pluto@gmail.com',
    'paperino@gmail.com',
    'topolino@gmail.com',
    'minni@gmail.com'
]

//Inizio dal chiedere all'utente di inserire la sua email
const email = prompt("Inserire email");

//Altra variabile
let text;

//Metto la condizione per controllare se l'email è nella lista
if (emailsAuthorized.includes(email)) {
    text = "Email autorizzata all'accesso";
} else {
    text = "Accesso negato, email non autorizzata";
}
console.log(text);