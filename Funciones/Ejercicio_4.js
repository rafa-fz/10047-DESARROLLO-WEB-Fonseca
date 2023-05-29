// Ejercicio 4: En este ejercicio, se declara una variable con el mismo nombre en el ámbito global y en una
// función. Se muestra en la consola el valor de ambas variables para observar cómo se
// accede a ellas y cuál prevalece en cada contexto.

let variable_Global_Local = "GLOBAL";

function alcance() {
    let variable_Global_Local = "LOCAL";

    console.log(`Valor de variable en la función: ${variable_Global_Local}`);
}

alcance();

console.log(`Valor de variable en el ámbito global: ${variable_Global_Local}`);
