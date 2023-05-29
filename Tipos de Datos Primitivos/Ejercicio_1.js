// Ejercicio 1: En este ejercicio, se solicita al usuario que ingrese un número como cadena de texto, se
// convierte a tipo de dato numérico y se realiza una operación matemática.


let numeroComoCadena = prompt("Ingresa un número como cadena de texto:");

let numero = Number(numeroComoCadena);

let resultado = numero * 2

console.log(`El resultado de multiplicar ${numero} por 2 es: ${resultado}`);