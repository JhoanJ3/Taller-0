// 8. Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.

let ale = parseInt(Math.random()* 5)+1;
console.log("Número obtenido", ale);
let num, intentos = 5;
/* Saldremos del bucle si agotamos intentos o acertamos número */
do {
  num = prompt(
    `Ingrese un número entre 1 y 5 (quedan ${intentos} intentos):`
  );
} while(ale != num && --intentos > 0);
/* Detectamos si salimos del bucle por agotar intentos o acertar número */
if (ale == num){
  alert("¡Ha acertado el número!");
} else {
  alert("se terminaron los 5 intentos, sigue intentando");
}