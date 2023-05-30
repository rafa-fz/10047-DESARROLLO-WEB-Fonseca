// 1.6.2 Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function primerElemento(array) {
    console.log(array[0]);
}

primerElemento([1, 2, 3, 4, 5]);


// 1.6.3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno 
// (no se vale imprimir el array completo).

function todosElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

todosElementos([1, 2, 3, 4, 5]);


// 1.6.4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno 
// (no se vale imprimir el objeto completo).

function todosElementosObjeto(objeto) {
    for (let i in objeto) {
        console.log(objeto[i]);
    }
}

todosElementosObjeto({ nombre: "Juan", apellido: "Perez" });
   
