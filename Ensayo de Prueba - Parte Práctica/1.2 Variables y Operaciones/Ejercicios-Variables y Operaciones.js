// 1.2.3 Traduce a código JavaScript las variables del ejemplo anterior.

let name = "Juan"
let lastname = "Pérez"
let userESPE = "jperez"
let age = 25
let email = "jperez@espe.edu.ec"
let legalAge = true
let moneySaved = 25000
let debts = 15000


// 1.2.4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
// • Nombre completo (nombre y apellido)
let CompleteName = name + " " + lastname;
console.log(`El nombre completo es: ${CompleteName}`);

// • Dinero real (dinero ahorrado menos deudas)
let totalMoney = moneySaved - debts;
console.log(`El dinero real es: ${totalMoney}`);