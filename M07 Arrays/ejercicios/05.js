function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
 var temporal=undefined
for ( var i=0;i<array.lenght;i++){
  if(array[i]>=5){
    return array [i]
    temporal=array[i]
}

}
  return temporal
}

module.exports = obtenerPrimerStringLargo;
