var express = require('express');
var router = express.Router();

const productos = [
    {id : 1, nombre : 'Termo Stanley 1.3lts con tapa para mate', descripcion : 'El mejor shampoo para niños', precio : 108, imagen : 'termo1.jpg', stock : 0, categoria: "Aire libre"},
    {id : 2, nombre : 'Bicicleta Mointain Rod. 27', descripcion : 'Jabon que hace mucha espuma en la ducha', precio : 210, stock : 5, imagen : 'bike1.jpg', categoria: 'Aire libre'},
    {id : 3, nombre : 'Poltrona Venecia', descripcion : 'Moderno diseño con estructura 60% de madera maciza y 40% MDF. Su tapizado con doble costura reforzada con pespunte. Asiento con poliéster y cinchas elásticas con relleno de guata y poliéster de alta densidad. Patas de madera maciza lustrada.', precio : 400, imagen : 'sillon1.jpg', stock : 10, categoria: "Art. del hogar" },
    {id : 4, nombre : 'Vans U OLD SKOOL', descripcion : 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el correr de las décadas se', precio : 520, stock : 10, imagen : 'zapa2.jpg', categoria: "calzado" },
    {id : 5, nombre: 'Nike Air Max', descripcion : 'En 1990, la línea Air Max dio un gran paso con el lanzamiento de un modelo que enseguida transcendió su función como zapatillas de running. Los más jóvenes las conocerán como las Air Max 90, pero tras su lanzamiento, el diseño fue visto como una evolución de las Air Max originales de 1987 y se las acabó llamando Air Max III.', precio : 120, imagen : 'zapa1.jpg', stock : 10, categoria: "calzado" },
    {id : 6, nombre: 'Sillon oficina', descripcion: 'No es un sillon cualquiera, este es negro, sube y baja como los otros, pero mejor', precio : 5000, imagen: 'sillon2.jpg', stock: 6, categoria: "art. de oficina" },
    {   id : 7, nombre : 'EPSON L3150 Multifuncion Wifi EcoTank', descripcion : 'La multifunctional inalámbrica EcoTank L3150 te ofrece la revolucionaria impresión sin cartuchos, con nuevo diseño de tanques frontales, botellas de tinta con llenado automático y codificadas para llenado fácil de cada color.', precio : 18000, imagen : 'impresora.jpg', stock : 8, categoria: "art. de oficina"  }     
]
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS. <br> Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

//Definimos Middelware

router.get('/',(req,res) => {
    // res.send("Seccion productos")
    res.render('listProductos.hbs',{title:"Productos",productos:productos,legales:legales,envios:envios})
})

//Pasamos por get el id
router.get('/:id',(req,res) => {
    console.log(req.params.id)

    let idProd = req.params.id

    //Filtrar el id, dentro del array de productos. Devuelve un nuevo array
    let buscarProd = productos.find( productos => productos.id == idProd )

    // console.log(buscarProd)

    res.render('producto.hbs',{title:buscarProd.nombre,producto:buscarProd,legales,envios})

})


module.exports = router;
