/*
Escenario:
Una tienda online quiere analizar los precios de liquidación en una categoría.

Reglas de negocio:

Usa este arreglo: let precios = [800, 1500, 450, 2200, 950, 3100, 600];.

Declara dos variables antes del bucle:

cantidadOfertas (iniciada en 0) para contar cuántos productos están en oferta.

totalOfertas (iniciada en 0) para sumar el costo de todas las ofertas.

Recorre la lista con un bucle for usando .length.

Una oferta es cualquier producto con precio menor a 1000 (< 1000).

Si se cumple: muestra "Oferta encontrada: $[PRECIO]", suma 1 a cantidadOfertas y acumula ese precio en totalOfertas.

Al terminar el bucle, muestra afuera:

"Cantidad de ofertas: [CANTIDAD]"

"Total acumulado en ofertas: $[TOTAL]"
*/

let precio = [ 800, 1500, 450, 2200, 950, 3100, 600 ];
let cantidadOferta = 0 
let totalOferta = 0

for(let i = 0 ; i < precio.length ; i = i + 1){
  if (precio [i] < 1000){
    console.log("oferta encontrada: " + precio[i])
    cantidadOferta = cantidadOferta + 1
    totalOferta = totalOferta + precio[i]
  }
}
console.log("Cantidad de ofertas: " + cantidadOferta)
console.log("Total acomulado de ofertas: " + totalOferta)