function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array[array.unshift(elemento)]
  return array
}

module.exports = agregarItemAlComienzoDelArray;
