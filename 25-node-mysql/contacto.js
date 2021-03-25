const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer')
const Sequelize = require('sequelize')
const db = require('../config/db')

// Verbos http -> get / post / etc...
router.get('/', function(req,res){
    // send -> string
    // render -> archivos
    //res.send("Esta la seccion contacto!")
    res.render('contacto.hbs',{title:"Contacto"})
})

router.post('/', function(req,res) {
    // console.log(req.body.nombre)
    // console.log(req.body.email)
    // console.log(req.body.localidad)

    let nombreForm, emailForm, localidadForm
    nombreForm = req.body.nombre
    emailForm = req.body.email
    localidadForm = req.body.localidad

    function validacion() {
        if(nombreForm == "" || emailForm == "" || localidadForm == ""){
            let validacion = "Faltan datos por completar"
            res.render('contacto.hbs',{
                validacion,
                nombreForm,
                emailForm,
                localidadForm
            })
        }else{
            
            //Enviar por email -> NodeMailer
            async function main() {
                

                //transporter -> datos de conexion al servidor de correos (SMTP)
                // POP3 (correo Entrante)
                // SMTP (correo saliente)

                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                      user: "guido.varela@gmail.com",
                      pass: "txceanjgigavyxdm", // En Gmail, debemos crear una contraseña de aplicaciones
                      //https://support.google.com/accounts/answer/185833
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                  });
                  
                  let info = await transporter.sendMail({
                    //Quien escribe -> usuario
                    from: `${nombreForm} <${emailForm}>` ,
                    // Sitio
                    to: "guido.varela@gmail.com", // list of receivers
                    subject: "Nuevo contacto", // Subject line
                    html: `Nombre: ${nombreForm} <br> Email: ${emailForm} <br> Localidad ${localidadForm} `, // html body
                  });

                  
                  //Subida de esos datos a una base MySQL
                  //Sequelize + mysql2

                  // Conexion servidor MYSQL

                  //evaluamos la conexion
                  db.authenticate()
                    .then(() => {
                        console.log('Conectado a la base de datos')
                    })
                    .catch(err => {
                        console.log('No se conectó a la base')
                    })

                  
                  
                //Model -> objeto con la estructura de la tabla
                //Interface del objeto de envio
                const envioForm = db.define('contactos',{
                    id:{
                        type:Sequelize.NUMBER,
                        allowNull:false,
                        primaryKey:true,//clave primaria
                        autoIncrement: true//autoincremento
                    },
                    nombre:{
                        type:Sequelize.STRING
                    },
                    email:{
                        type:Sequelize.STRING
                    },
                    localidad:{
                        type:Sequelize.STRING
                    }
                })

                try {
                    // Consulta al servidor
                    // async -> await
                    //Estamos haciendo un INSERT INTO ... VALUES(id, nombre, email, localidad)
                    const enviar = await envioForm.create({
                        id:'',
                        nombre: nombreForm,
                        email:emailForm,
                        localidad:localidadForm
                    })
                    console.log(enviar)
                    console.log("Dato enviado")
                }
                catch (error) {
                    console.log(error + "/ Enviando desde el Form Contacto")

                }
                

                // res.send("Correo enviado!")

                res.render('formEnviado.hbs',{
                    nombreForm,
                    emailForm,
                    localidadForm,
                    envio:true
                })

            }
            main().catch(console.error);

    }
        }
    validacion()  
})

module.exports = router