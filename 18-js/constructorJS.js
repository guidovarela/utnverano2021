//constructor o interface
      //Por convencion, los constructores se definen en Mayuscula
      //Esafuncion.propiedadObjeto = argumentoFuncion


const user0 = {
    nombre:"Marcelo",
    apellido:"Tinelli",
    edad: 50,
    nacionalidad: "Argentina",
    hijos : [
      'Maria','Francisco','Laura'
    ],
    saludo: function saludar(){
      alert(`Hola, soy ${this.nombre}`)
    }
  }

  // -> Arrow Function
  //const Usuarios = function() {}
  //const Usuarios = () => {}

//Creamos una interface o constructor

function Usuarios(nombre,apellido,edad,nacionalidad,hijos) {
    //propiedad del objeto modelado = valor por parametro
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.nacionalidad = nacionalidad
    this.hijos = hijos
}

//Para utlizar la interface, debemos instanciarla -> copia de la interface
let altaUser1 = new Usuarios('Maria','Lopex',30,'Cataluña',[])
let altaUser2 = new Usuarios('Vanina','Gonzalez',36,"Argentina",[])
let altaUser3 = new Usuarios('Martin','Delojo',20,"Argentina",['Martin','Luca'])
let altaUser4 = new Usuarios('Cecilia','Matalone',50,'Argentina',[])


//agregar los usuarios

const users = []

//Tarea: como pushear por medio de un ciclo 
users.push(user0)
users.push(altaUser1)
users.push(altaUser2)
users.push(altaUser3)
users.push(altaUser4)

//Mostrar los datos en pantalla
for (const mostrar of users) {
    document.write(mostrar.nombre + " ")
    document.write(mostrar.apellido + ", <br>")
    document.write(mostrar.edad + " años, <br>")
    document.write(mostrar.nacionalidad + ".<br>")
    document.write(' Hijos: ')
    if(mostrar.hijos.length == 0){
      document.write('no tiene.<br>')
    }else{
      for (const hijos of mostrar.hijos) {
        document.write(hijos+", ")
      }
    }
    document.write('<hr>')
}


