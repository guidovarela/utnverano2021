const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer')

// Verbos http -> get / post / etc...
router.get('/', function(req,res){
    // send -> string
    // render -> archivos
    //res.send("Esta la seccion contacto!")
    res.render('contacto.hbs',{title:"Contacto"})
})

router.post('/', function(req,res) {
    console.log(req.body.nombre)
    console.log(req.body.email)
    console.log(req.body.localidad)

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
            
            async function main() {
                
                //Enviar por email -> NodeMailer

                //transporter -> datos de conexion al servidor de correos (SMTP)
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                      user: "guido.varela@gmail.com",
                      pass: "xxxxxxxxxxxxxxxxxx", // En Gmail, debemos crear una contraseña de aplicaciones
                      //https://support.google.com/accounts/answer/185833
                    },
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