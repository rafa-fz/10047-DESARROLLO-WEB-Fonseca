// 1.6.2 Crea un array con los siguientes elementos: "Hola", "¿", "Cómo", "estás", "?".

let array = ["Hola", "¿", "Cómo", "estás", "?"];


// 1.6.3Accede al primer elemento del array que creaste en el ejercicio anterior e imprímelo en la consola.

console.log(array[0]);


// 1.6.4 Ahora supongamos que debes guardar datos de una persona. Crea un objeto con las
// siguientes propiedades: nombre, apellido, edad, hobbies (un array con varios elementos) y
// contacto (un objeto con las propiedades email y teléfono).

let person = {
    name: "Juan",
    lastname: "Pérez",
    age: 25,
    hobbies: ["Leer", "Jugar", "Dormir"],
    contact: {
        email: "jperez@espe.edu.ec",
        phone: "0987654321"
    }
};


// 1.6.5 Accede al valor de la propiedad hobbies y imprímelo en la consola

console.log(person.hobbies);


// 1.6.6 Accede al valor de la propiedad email y imprímelo en la consola.

console.log(person.contact.email);
   
