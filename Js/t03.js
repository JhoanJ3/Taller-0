// Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso (sin usar funciones de JavaScript).

function inverPal(cad) {
   
    let nuevaCadena = "";
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;

}
inverPal ( prompt ( "Dijite una palabra"));
