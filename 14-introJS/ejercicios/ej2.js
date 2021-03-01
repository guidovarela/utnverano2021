/*
2. Permitir al usuario ingresar 3 numeros dentro de la plataforma. 
Mostrar (por consola) una vez terminado el proceso cual es el mayor y cual el menor.
> <
*/

/* let vs var 
let saludo ="hola mundo"
console.log(saludo)
saludo ="chau mundo"
console.log(saludo)*/



let num1,num2,num3

num1 = prompt("ingrese el 1er número")
num2 = prompt("ingrese el 2do número")
num3 = prompt("ingrese el 3er número")

/*Obtenemos el mayor */
if(num1 > num2 && num1 > num3 ){
    console.log("El mayor es num1 ->"+ num1)
}else if(num2 > num1 && num2 > num3){
    console.log("El mayor es num2 ->"+ num2)
}else{
    console.log("El mayor es num3 ->"+ num3)
}

/*Obtener el menor */
if (num1 < num2 && num1 < num3){
    console.log("El menor es num1" + num1)
} else if(num2 < num1 && num2 < num3){
    console.log("El menor es num2 -> "+ num2)
}else{
    console.log("El menor es num3 -> "+ num3)
}
