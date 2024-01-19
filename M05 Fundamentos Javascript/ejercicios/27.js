function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
   combinacion= nombre+" "+apellido
   return combinacion

}
console.log(combinarNombres("hola","mundo"))
module.exports = combinarNombres;
