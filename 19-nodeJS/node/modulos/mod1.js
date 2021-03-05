//Definimos funciones para exportar

const lugar1 = "Mi casa, por culpa de la pandemia"

//funcion anonima
const suma = function(num1,num2){
    return num1+num2
}
//suma(val1,val2)

//Exportamos el contenido -> habilitacion para poder importar este documento
//exports.DatoAexportar = DatoLocal
exports.lugar = lugar1
exports.suma = suma