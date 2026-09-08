/*
Escenario:
Un repositor de supermercado escanea una lista de precios para revisarlos en el sistema uno por uno.

Reglas de negocio:

Crea un arreglo llamado precios con los valores: [150, 320, 80, 500, 210].

Recorre toda la lista de principio a fin utilizando un bucle for.

En cada vuelta, debe imprimir en consola: "Producto en posición [INDICE]: $[PRECIO]".

Al finalizar la revisión de todos los productos, debe imprimir: "Revisión de precios completa".
*/




let precio = [ 150, 320, 80, 500, 210 ];
for (let i = 0 ; i < 5; i = i + 1){
  console.log("Producto en posición" + " " + i + ": $" + precio[i])
}
console.log("Revision completada")