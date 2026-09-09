/*
Escenario:
Registraste tus gastos de lunes a viernes en una lista y necesitas calcular cuánto dinero gastaste en total.

Reglas de negocio:

Crea un arreglo llamado gastos con estos 5 importes: [1200, 450, 3000, 850, 1500].

Declara una variable acumuladora para llevar la cuenta del dinero total.

Recorre el arreglo con un bucle for usando .length.

En cada vuelta, suma el valor del gasto actual a tu acumulador.

Al terminar el bucle, muestra en consola: "Gasto total de la semana: $[TOTAL]".
*/

let gasto = [ 1200, 450, 3000, 850, 1500 ];
let acomulador = 0
for (let i = 0 ; i < gasto.length ; i = i + 1){
  acomulador = acomulador + gasto [i]
  console.log("Numero de vuelta " + i + ": " +  gasto [i])
  
}
console.log("Valor final de la suma "+acomulador);
