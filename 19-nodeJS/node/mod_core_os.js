//importar funcionalidad, del nucleo de NodeJS -> devuelve un objeto
const os = require('os')
//importar modulos locales
const maradona = require('./modulos/mod1')

/*console.log(os.freemem())
console.log(os.hostname())
console.log(os.platform())*/
console.log(`Estamos en ${maradona.lugar1}`)
console.log(maradona.suma(5874,214521))


