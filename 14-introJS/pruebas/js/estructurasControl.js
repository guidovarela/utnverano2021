
//Estructuras de control
// funciones para testear
// funcion(parametros)


// alert() / prompt() / confirm()

//alert("hola")
/*
var nombre = prompt("Escribi tu nombre!")

//Condicional if -> decision -> true o false
// if(condicion){ verificacion verdadera } else {falsa}
// En las condiciones puede haber comparaciones de datos
// = asigna
// == compara el dato -> "este dato es igual a este otro"
// === compara dato y tipo de dato


if(nombre == null) {
    alert("debes completar el nombre")
    nombre = prompt("Escribi tu nombre!")
    alert("Hola " + nombre) // +  concatenacion
}else{
    alert("Hola "+nombre) // +  concatenacion
}

var edadUsuario = prompt("edad?")
const mayoriaEdad = 18

if(edadUsuario >= mayoriaEdad ){
    console.log("sos mayor de edad porque tenes "+edadUsuario+" años")
}else{
    console.log("Tenes "+edadUsuario+" años y sos menor de edad. ")
}*/

// === compara dato y tipo de dato

var num1 = 50
var num2 = "25"
var num3 = "25"

var suma1 = num2 + num3
console.log(suma1)

if(num1 === suma1 ) {
    console.log("Son iguales")
}else{
    console.log("Son distintos")
}


