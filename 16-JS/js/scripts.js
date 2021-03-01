
// operaciones aritmetica
// + - * /
// en JS el + sirve concatenar strings (o variables) 

//Calculadora low-cost

let num1,num2,suma,resta,multi,divi
//1- definimos las variables

function inicio() {
    num1 = prompt("Numero 1") 
    num2 = prompt("Numero 2")
    //INT -> entero
    // parseInt() -> convertir un dato en numero entero -> no tienen decimales
    // edad = parseInt(edad)
    // parseFloat() -> string a numero con decimales
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
}

//Podemos comparar valores null, undefined, NaN -> ==

//2- definimos la funciones
function sumar(){
    if(num1 == undefined && num2 == undefined){
        alert("Deber cargar los numeros primero. Hace clic en 'Iniciar'")
    }else{
        suma = num1 + num2
        console.log("La suma de "+num1+" y "+num2+" es "+suma)
    }
}
function restar(){
    if(num1 == undefined && num2 == undefined){
        alert("Deber cargar los numeros primero. Hace clic en 'Iniciar'")
    }else{
        resta = num1 - num2
        console.log("La resta de "+num1+" y "+num2+" es "+resta)
    }
}
function producto(){
    if(num1 == undefined && num2 == undefined){
        alert("Deber cargar los numeros primero. Hace clic en 'Iniciar'")
    }else{
        multi = num1*num2
        console.log("El producto de "+num1+" y "+num2+" es "+multi)
    }
}
function division(){
    if(num1 == undefined && num2 == undefined){
        alert("Deber cargar los numeros primero. Hace clic en 'Iniciar'")
    }else{
        if(num1 === 0 || num2 === 0){
            console.log("No es posible dividor por 0")
        }else{
            divi = num1/num2
            console.log("La division de "+num1+" y "+num2+" es "+divi)
        }
    }
}
//3- ejecutamos la operacion
// sumar()
// restar()
// producto()
// division()