function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

var resultado=resultadosTest.reduce(function(acum,elemento){
  return (acum=acum+elemento)
})

return resultado/resultadosTest.length
}

module.exports = promedioResultadosTest;
