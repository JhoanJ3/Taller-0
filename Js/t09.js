// 9. Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.
let lista = []

const numero = parseInt (prompt ( "Dijite un numero"))


for (let i = 0; i < numero; i++) {

    const decimal = parseInt (Math.random() * 10)
    
    if (i % 2 === 1) {
        lista.push (i)
        // document.getElementById('salida').innerHTML = pares;
    }
}
console.log (lista)