var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //res.render -> 2 parametros ("vista a renderizar", {data})
  res.render('usuarios',{seccion:"usuarios",nombre:"Guido",apellido:"Varela",edad:40})
});

module.exports = router;
