-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-02-2021 a las 19:29:41
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
CREATE DATABASE IF NOT EXISTS `utn2021` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `utn2021`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `edad` tinyint(3) NOT NULL,
  `email` varchar(100) NOT NULL,
  `ubicacion` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido`, `dni`, `telefono`, `edad`, `email`, `ubicacion`) VALUES
(1, 'Maria Jose', 'Lopez', '30896532', '115236985', 25, 'maria@mail.com', 'Escobar'),
(2, 'Matias', 'Morla', '52145210', '115247890', 40, 'morla@mail.com', 'CABA'),
(3, 'Jose', 'Velez', '12478530', '112478893', 70, 'jose@mail.com', 'Mexico'),
(4, 'Marcela', 'Morelo', '20457896', '113256982', 47, 'marcela@mail.com', 'Buenos Aires'),
(10, 'Diego Armando', 'Maradona', '16216872', '11247654', 60, 'maradona@mail.com', 'Segurola y Habana'),
(11, 'Ana', 'no duerme', '12457866', '', 30, 'ananoduerme@mail.com', 'Santa Fe');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
