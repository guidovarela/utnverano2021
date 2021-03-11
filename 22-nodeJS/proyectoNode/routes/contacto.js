const express = require('express')
const router = express.Router();

// Verbos http -> get / post / etc...
router.get('/', function(req,res){
    // send -> string
    // render -> archivos
    //res.send("Esta la seccion contacto!")
    res.render('contacto.hbs',{title:"Contacto"})
})

module.exports = router