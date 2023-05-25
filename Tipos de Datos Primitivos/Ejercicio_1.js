// Pedimos al usuario que ingrese un número como cadena de texto
let numeroComoCadena = prompt("Ingresa un número como cadena de texto:");

// Convertimos la cadena de texto a tipo de dato numérico
let numero = Number(numeroComoCadena);

// Realizamos una operación matemática con el número
let resultado = numero * 2

// Mostramos el resultado en la consola
console.log(`El resultado de multiplicar {numero} por 2 es: ${resultado}`);