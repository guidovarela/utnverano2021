//declaramos el array y le asignamos los valores
var clasificacion = ["Ana", "Pedro", "Mariano", "Clara", "Axel", "Anton"];
 
//Mostrar Clasificacion Inicial
document.write("Clasificación actual" + "<br>"); 
let position = 1
for (let i = 0; i < clasificacion.length; i++) {
    document.write(`${position++}º - ${clasificacion[i]}  `)
}

//Cambios de clasificación
clasificacion[2] = "Clara";
clasificacion[3] = "Mariano";
clasificacion.pop();
clasificacion.splice(1, 0, "Roberto", "Analia");
clasificacion.unshift("Marcela");
 
//clasificación Final
document.write("<hr>");
position=1
for (let i = 0; i < clasificacion.length; i++) {
    document.write(`${position++}º - ${clasificacion[i]} <br>  `)
}
