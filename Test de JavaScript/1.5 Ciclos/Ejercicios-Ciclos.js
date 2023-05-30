// 1.5.2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
// for (let i = 0; i < 5; i++) {
// console.log("El valor de i es: " + i);
// }
// for (let i = 10; i >= 2; i--) {
// console.log("El valor de i es: " + i);
// }

let i = 0;
while (i < 5) {
console.log("El valor de i es: " + i);
i++;
}

let j = 10;
while (j >= 2) {
console.log("El valor de j es: " + j);
j--;
}


// 1.5.3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto
// es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones,
// pero si responden mal, volvemos a empezar.

let respuesta = prompt("Cuanto es 2 + 2?");
while (respuesta != 4) {
respuesta = prompt("Cuanto es 2 + 2?");
}
alert("Felicitaciones!, la respuesta es 4");