function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  str=str+"!"
  return str
}
console.log(agregarSimboloExclamacion("hola mundo"))
module.exports = agregarSimboloExclamacion;
