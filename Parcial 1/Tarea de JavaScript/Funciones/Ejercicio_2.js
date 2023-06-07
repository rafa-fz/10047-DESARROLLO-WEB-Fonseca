// Ejercicio 2: En este ejercicio, se utiliza una función expresiva o función anónima para calcular el área de
// un triángulo. La función recibe la base y la altura como parámetros, realiza el cálculo del
// área y devuelve el resultado. Se realiza la llamada a la función y se muestra el resultado en
// la consola.

let areaTriangulo = function(base, altura) {
    return (base * altura) / 2;
}

let resultado = areaTriangulo(10, 20);

console.log(`El área del triángulo es: ${resultado}`);