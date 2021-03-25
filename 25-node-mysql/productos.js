var express = require('express');
var router = express.Router();
//Importar MYSQL -> conexion
const Sequelize = require('sequelize')
const db = require('../config/db')
//ES7
/*import Sequelize from 'sequelize'
import db from '../config/db.js'*/


const productos = {}
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS. <br> Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

// Model Producto
const leerProd = db.define('productos', {
    id:{
        type:Sequelize.NUMBER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
    },
    nombre: { type: Sequelize.STRING},
    descripcion: { type: Sequelize.STRING},
    precio: { type: Sequelize.DECIMAL},
    imagen: { type: Sequelize.STRING},
    stock: { type: Sequelize.INTEGER},
    categoria: {type: Sequelize.STRING}
})

//Definimos Middelware

router.get('/',async (req,res) => {
    // Test de conexion MySQL
    /*try {
        await db.authenticate();
        console.log('Conexion establecida.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }*/
    
      

//Realizar la consulta -> SELECT columnas FROM tabla
      const consultaData = await leerProd.findAll()
    //   console.log(consultaData)
// Obtener los registros -> objeto -> renderizar en la vista


    res.render('listProductos.hbs',{title:"Productos",productos:consultaData,legales:legales,envios:envios})
})

//Pasamos por get el id
router.get('/:id',async (req,res) => {
    console.log(req.params.id)

    let idProd = req.params.id

    //Realizar la consulta -> SELECT columnas FROM tabla
    const consultaData = await leerProd.findAll()
    //   console.log(consultaData)
// Obtener los registros -> objeto -> renderizar en la vista

    //Filtrar el id, dentro del array de productos. Devuelve un nuevo array
    let buscarProd = consultaData.find( consultaData => consultaData.id == idProd )

    // console.log(buscarProd)

    res.render('producto.hbs',{title:buscarProd.nombre,producto:buscarProd,legales,envios})

})


module.exports = router;
