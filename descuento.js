let precio = prompt("ingrese el valor del articulo")

let p = parseFloat(precio)
const iva = 0.15

 const descuento = 0.20
let coniva = p + (p * iva)
 let preciofinal = coniva -(coniva * descuento)



console.log( "el precio inicial fue de " + precio + " ascendio con iva a  " + coniva + " el descuento fue del 20%  y el total a pagar es de  " + preciofinal)