// 1. Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.


let lista = []
let mayor
let menor

let numer1 = parseInt (prompt ( "Dijite un numero 1"))
let numer2 = parseInt (prompt ( "Dijite un numero 2"))

lista.push(numer1)
lista.push(numer2)

console.log (lista)

    if(numer1>numer2){
        alert(numer1+" Es el mayor.")
    }else{
        alert(numer2+" Es el mayor.")
    }
 
