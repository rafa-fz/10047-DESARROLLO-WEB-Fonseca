// 1.	Crea una variable llamada "nombre" y asígnale tu nombre como valor.

let nombre = "Rafael";

// 2.	Crea una función llamada "suma" que reciba dos parámetros (a y b) y retorne la suma de ambos.

function suma(a, b) {
    return a + b;
}

// 3.	Escribe un condicional que verifique si una persona es mayor de edad. Si es mayor de edad, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad".

let edad = 18;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// 4.	Crea un ciclo "for" que imprima los números del 1 al 5.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 5.	Crea una función llamada "imprimirArray" que reciba como parámetro un array y lo imprima elemento por elemento. Respuesta:

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// 6.	¿Cuánto es 2 + 2? Respuesta: 4


// 11.	Crea una función llamada "primerElementoArray" que reciba como parámetro un array y retorne el primer elemento.

function primerElementoArray(array) {
    return array[0];
}

// 12.	Crea una función llamada "imprimirElementosArray" que reciba como parámetro un array y lo imprima usando un ciclo "for".

function imprimirElementosArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}