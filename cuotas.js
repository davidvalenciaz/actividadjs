let compra = parseInt(prompt("ingrese el valor total de la compra "))

prompt(" formas de pago: \n 1 cuota  \n 2 cuotas \n 6 cuotas ")

if (compra ===1){
    console.log("su compra se dividio en 1 cuota y tiene 0% de recargo"+ compra )

}else if (compra ===2){
    console.log("su compra se divivio en 2 cuotas " + (compra + compra*0.05) /2 + " con un recargo del 5% " + compra * 0.05)
}else (compra ===6)
    console.log("su compra se dividio en 6 cuotas "+ (compra + compra * 0.40) / 6 + " con un recargo del 40% " + compra * 0.40)
