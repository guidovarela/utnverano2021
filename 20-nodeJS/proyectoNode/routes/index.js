//importa Express
var express = require('express');

//Para utilizar las rutas, por medio de express
var router = express.Router();

/* llamada http -> GET */
router.get('/', function(req, res, next) {
  //res.render -> renderiza una vista
    //interpolacion de datos -> la ruta le manda a la vista (.hbs), informacion en un objeto
  res.render('index.hbs', { title: 'Express' });
});

module.exports = router;
