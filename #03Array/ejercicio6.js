/*
Tienes un registro de temperaturas de la semana y quieres identificar cuál fue la temperatura máxima registrada.

Reglas de negocio:

Usa este arreglo: let temperaturas = [22, 28, 19, 34, 31, 25];.

Declara una variable maxima e inicialízala con el primer elemento de la lista (temperaturas[0]).

Recorre el arreglo con un bucle for (puedes empezar en i = 1 porque la posición 0 ya la tienes en maxima).

Si la temperatura de la vuelta actual (temperaturas[i]) es mayor que tu valor guardado en maxima:

Reasigna maxima para que ahora guarde ese nuevo récord.

Al finalizar el bucle, muestra afuera: "La temperatura máxima fue de: [MAXIMA] grados".
*/

let temperatura = [ 22, 28, 19, 34, 31, 25 ];
let maxima = temperatura[0]
for (let i = 1 ; i < temperatura.length ; i = i + 1){
  if (temperatura[i] > maxima){
    maxima = temperatura[i]
  }
}
console.log("La temperatura maxima es de: " + maxima + " grados")
