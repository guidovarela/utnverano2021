-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-03-2021 a las 17:13:09
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `utn2021`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `imagen` text NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `stock`, `categoria`) VALUES
(1, 'Termo Stanley 1.3lts con tapa para mate', 'El mejor termo para alimentos es el Thermos Stainless King, con una práctica cuchara y tapa que sirve como plato. Dura hasta 7 horas de frío y calor de hasta 9 horas', '10000', 'termo1.jpg', 10, 'aire libre'),
(2, 'Bicicleta Mountain Rod. 27', 'Las Bicicletas Battle cuentan con certificación internacional ISO 4210 y nacional IRAM 40020 y la marca ofrece una red de servicio técnico para asegurar al usuario la mejor experiencia.', '2000', 'bike1.jpg', 3, 'aire libre'),
(3, 'Poltrona Venecia', 'Moderno diseño con estructura 60% de madera maciza y 40% MDF. Su tapizado con doble costura reforzada con pespunte. Asiento con poliéster y cinchas elásticas con relleno de guata y poliéster de alta densidad. Patas de madera maciza lustrada.', '6900', 'sillon1.jpg', 2, 'art. para el hogar'),
(4, 'Vans U OLD SKOOL', 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el correr de las décadas se', '8999', 'zapa2.jpg', 0, 'calzado'),
(5, 'Nike Air Max', 'En 1990, la línea Air Max dio un gran paso con el lanzamiento de un modelo que enseguida transcendió su función como zapatillas de running. Los más jóvenes las conocerán como las Air Max 90, pero tras su lanzamiento, el diseño fue visto como una evolución de las Air Max originales de 1987 y se las acabó llamando Air Max III.', '5999', 'zapa1.jpg', 14, 'calzado'),
(6, 'Sillon de oficina', 'No es un sillon cualquiera, este es negro, sube y baja como los otros, pero mejor. No es un sillon cualquiera, este es negro, sube y baja como los otros, pero mejor', '12000', 'sillon2.jpg', 6, 'art. de oficina'),
(7, 'EPSON L3150 Multifuncion Wifi EcoTank', 'La multifunctional inalámbrica EcoTank L3150 te ofrece la revolucionaria impresión sin cartuchos, con nuevo diseño de tanques frontales, botellas de tinta con llenado automático y codificadas para llenado fácil de cada color.', '18325', 'impresora.jpg', 8, 'art. de oficina');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
