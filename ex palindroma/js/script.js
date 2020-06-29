var parola = prompt("Inserisci una parola e ti dirò se è palindroma");

function palindroma(parola) {
  var firstHalf = 0;
  var lastHalf = 1;
  var controllo = false;
  var risultato;
  var esatto = "La parola è palindroma";
  var errato = "La parola non è palindroma";

  for (var i = 0; i < parola.length / 2; i++) {
    if (parola[firstHalf] == parola[parola.length - lastHalf]) {
      firstHalf = firstHalf + 1;
      lastHalf = lastHalf + 1;
      controllo = true;
    } else {
      controllo = false;
    }
  }

  if (controllo == true) {
    risultato = esatto;
  } else {
    risultato = errato;
  }

  return risultato;
}

var parolaPalindroma = palindroma(parola);
console.log(parolaPalindroma);
