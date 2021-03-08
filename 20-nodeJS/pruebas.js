// console.log("Estamos usando NodeJS!")

//Importando El modulo Express
const express = require('express')

//Se intancia la funcion de express()
const app = express()

//Puerto de conexion del servidor
const port = 3000

// console.log(app)

//Que sucede cuando hay una llamada HTTP / request -> response <- 
//verbos http -> get / post / put / delete
app.get('/', function(req, res) {
  res.send('Feliz dia a todas las mujeres!')
  //res.render -> renderizar una vista (.html)
  //res.json -> envia un objeto JSON 
})

//Contacto
// app.get('ruta',callback())
app.get('/contacto',function(req,res){
    res.send('Esto es el contacto!')
}) //(request, response, next)

app.get('/data',function(req,res){
    res.json({
        "id":1,
        "nombre":"Marcela"
    })
})
//Arrow Function () => {}
app.post('/',(req,res) => {
    res.send("Estamos usando el metodo POST -> Enviando...")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

