// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var pariDispari = prompt("Scegli pari o dispari");
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
var numeroComputer = getRandomIntInclusive(1, 5);
console.log("Il numero del computer è " + numeroComputer);
console.log("La somma è " + (numeroUtente + numeroComputer));
if ((numeroUtente + numeroComputer) % 2 == 0) {
  console.log("La somma è pari")
} else {
  console.log("La somma è dispari")
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  return result;
}

function confronto(numeroUtente, numeroComputer) {
  var pari = false;
  var result;
  var vinto = "Complimenti! Hai vinto!";
  var perso = "Ritenta, sarai più fortunato";

  if ((numeroUtente + numeroComputer) % 2 == 0) {
    pari = true;
  }

  if ((pari == true && pariDispari == "pari") || (pari == false && pariDispari == "dispari")) {
    result = vinto;
  } else {
    result = perso;
  }

  return result;
}

var partita = confronto(numeroUtente, numeroComputer);
console.log(partita);
