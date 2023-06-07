// Ejercicio 3: En este ejercicio, se declara una variable global y una variable local dentro de una función.
// Se muestra en la consola el valor de ambas variables tanto dentro como fuera de la función
// para observar el alcance de cada una.

let variableGlobal = "Variable global";

function alcance() {
    let variableLocal = "Variable local";
    console.log(variableLocal);
    console.log(variableGlobal);
}

alcance();
console.log(variableGlobal);
console.log(variableLocal);
