var express = require('express');
var router = express.Router();

//Interface Usuario
function User(nombre, apellido, edad, redes, frase) {
  this.nombre = nombre
  this.apellido = apellido
  this.edad = edad
  this.redes = redes
  this.frase = frase}

let user1 = new User("Maria","Lopex",20,['@marialopex','marialopex','maria-lopex-dev'],'lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem')
let user2 = new User("Jose","Martí",53,[],'lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem')
let user3 = new User("Miguel","Angel",30,['miguelangel'],'lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem')
let user4 = new User("Emanuel","Ortigoza",29,['@emaor'],'Lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem')

const users = []
users.push(user1,user2,user3,user4)

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //res.render -> 2 parametros ("vista a renderizar", {data})

  // console.log(users)

  res.render('usuarios.hbs',{
    title:"usuarios",
    users
  })
});

module.exports = router;
