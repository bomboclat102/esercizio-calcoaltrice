function risultato() {
  let operazione;
  if (document.getElementById("somma").checked) {
    operazione = 1;
  } else if (document.getElementById("sottrazione").checked) {
    operazione = 2;
  } else if (document.getElementById("moltiplicazione").checked) {
    operazione = 3;
  } else if (document.getElementById("divisione").checked) {
    operazione = 4;
  } else {
    operazione = 0;
  }
  let a = parseFloat(document.getElementById("op1").value);
  let b = parseFloat(document.getElementById("op2").value);
  let c;

  switch (operazione) {
    case 1:
      c = a + b;
      break;
    case 2:
      c = a - b;
      break;
    case 3:
      c = a * b;
      break;
    case 4:
      c = a / b;
      break;
    case 0:
      c = "scegliere un'operazione";
  }

  document.getElementById("ris").innerHTML = c;
}
