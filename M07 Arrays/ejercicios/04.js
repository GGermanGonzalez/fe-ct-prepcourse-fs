function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  var nuevoArray=array[Math.floor(Math.random()*array.length)]
    return nuevoArray
  }
 
  
  


module.exports = obtenerElementoAleatorio;
