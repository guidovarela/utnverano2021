/*
1.
 a. Definir dos constantes (variables) llamadas usuario y password y asignar el valor administrador y 1234 respectivamente
 b. Preguntar al usuario que ingresa al sitio a trav�s de dos prompts el usuario y la contrase�a del sistema
 c. Si el usuario y la contrase�a coinciden con las del sistema (variable usuario y password) mostrar en el navegador un mensaje de bienvenida
 d. Si no coinciden mostrar usuario o contrase�a incorrectos
*/

// console.log("esta linkeado!")


//definiendo constantes
const usuario = "admin"
const password = "1234"

let validacionUser = prompt("Ingrese Usuario")
let validacionPass = prompt("Ingrese Password")

/* operadores JS
 and -> &&
 or -> || (alt + 124)
 not -> !
 */

if( validacionUser == null || validacionPass == null ){
    alert("Debes aceptar todos los datos! Te preguntamos nuevamente...")
    validacionUser = prompt("Ingrese Usuario")
    validacionPass = prompt("Ingrese Password")
    }else if( validacionUser == usuario && validacionPass == password){
        console.log("datos correctos")
        document.write("Hola "+usuario+", bienvenido al sitio!")
    }else{
        console.log("Error! usuario o contraseña incorrectos")
        alert("Error! usuario y contraseña incorrectos")
    }




