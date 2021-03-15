//Definir la conexion a MySQL
const Sequelize = require('sequelize')

//Para conexion -> NombreBasedeDatos, userMysql, passMySQL, {host:host}
//Definimos una instancia de Sequelize, con los datos de conexion del host local
const db = new Sequelize('utn2021', 'root', '', {
    host: 'localhost', //127.0.0.1
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
})

//Exportamos el modulo
module.exports = db