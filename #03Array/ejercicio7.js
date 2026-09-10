/*
Escenario:
Un servidor registra tiempos de respuesta en milisegundos: [420, 180, 560, 95, 310, 120].

Objetivo:
Encuentra cuál fue el tiempo más bajo de la lista y en qué posición (índice) se encuentra.

Resultado esperado en consola:

Mostrar el tiempo más rápido.

Mostrar el índice exacto en el que ocurrió.
*/

let respuesta = [ 420, 180, 560, 95, 310, 120 ]
let minimo = respuesta[0]
let pocisionMinama = 0
for (let i = 1 ; i < respuesta.length ; i = i + 1){
  if (respuesta [i] < minimo){
    minimo = respuesta[i]
    pocisionMinama = i
  }
}

console.log("La respuesta minima es de: " + minimo + " se encuentra en el indice: " + pocisionMinama)