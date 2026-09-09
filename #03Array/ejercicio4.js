/*
Escenario:
Siguiendo con la lista de tus gastos semanales, quieres saber cuántas compras superaron tu presupuesto de seguridad.

Reglas de negocio:

Usa la lista: let gasto = [1200, 450, 3000, 850, 1500];.

Declara un contador para registrar los gastos excesivos.

Recorre el arreglo con un bucle for.

Si el gasto actual es mayor o igual a 1000, imprime: "Gasto alto detectado: $[VALOR]" y suma 1 a tu contador.

Al terminar de revisar toda la lista, muestra afuera del bucle: "Total de gastos altos: [CANTIDAD]".
*/

let gasto = [ 1200, 450, 3000, 850, 1500 ];
let gastoExecivo = 0
for (let i = 0 ; i < gasto.length ; i = i + 1){
  if (gasto[i] >= 1000){
    console.log("gasto detectado: " + gasto[i])
      gastoExecivo = gastoExecivo + 1
  }
}
console.log("Total de gastos altos: " + gastoExecivo)