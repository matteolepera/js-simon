// Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri
// che ha visto precedentemente, nell'ordine che preferisce. Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.
// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// 
//
//BONUS:
// * Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.,
// * Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
//
// Consigli del giorno:
// * Pensate prima in italiano.,
// * Dividete in piccoli problemi la consegna.,
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.,
// * Immaginate la logica come fosse uno snack:
// "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array",
// Milestone 0
// 1. Creare l'interfaccia ( anche senza css),
// Milestone 1
// 1. Generare i 5 numeri random,
// 2. Stampare i 5 numeri in pagina,
// 3. Far scomparire i 5 numeri dopo 30 secondi e mostrare gli input,
// Milestone 2
// 1. Al click sul bottone leggere i numeri inseriti dall'utente,
// 2. Controllare quanti dei umeri sono stati indovinati,
// 3. Stampare il risultato del punteggio
////////////////////////////////////////////////////////////////////
//
//
// devo visualizzare 5 numeri random.
// dopo 30 secondi questi numeri non ci sono più e invece visualizziamo a schermo 5 input.
// una volta inseriti questi input dall'utente dobbiamo confrontarli con i 5 random.

//5 input dalla pagina:
const firstInput = document.getElementById("first-number");
const secondInput = document.getElementById("second-number");
const thridInput = document.getElementById("thrid-number");
const fourthInput = document.getElementById("fourth-number");
const fifthInput = document.getElementById("fifth-number");
// console.log(firstInput, secondInput, thridInput, fourthInput, fifthInput);
//numeri randmo in pagina:
const randomNumberOutput = document.querySelector("h2");
// secondi per il gioco:
let seconds = 10;
let secondsInMs = seconds * 1000;

const randomNumber = [];

setTimeout(function () {
    randomNumberOutput.classList.add("d-none");
}, secondsInMs);

for (let i = 0; i < 5; i++) {
    let generatorNumber = Math.floor(Math.random() * 99) + 1;
    if (!randomNumber.includes(generatorNumber)) {
        randomNumber.push(generatorNumber);
    } else {
        i--;
    }

}
// console.log(randomNumber);

randomNumberOutput.innerHTML = randomNumber.join(", ");