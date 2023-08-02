let dias = prompt("ingrese el numero de dias que va a viajar ")
let d = parseInt(dias)
const gastos = 200
let hotel = 45000
let comida = 50000
let tgastos = gastos * d
let tcomida = comida * d
let thotel = hotel * d

cheque = tcomida + tgastos + thotel
console.log( "el total de otros gastos fue de " + tgastos)
console.log("el total de gastos en hotel fue de " + thotel)
console.log("el total de gastos en  comida fue de "+ tcomida)
console.log("el valor del cheque es de " + cheque)