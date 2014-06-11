-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2014 a las 12:05:56
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `suelosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `analisis`
--

CREATE TABLE IF NOT EXISTS `analisis` (
  `id_analisis` int(4) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `categoria` varchar(15) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `costo` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_analisis`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `azufre`
--

CREATE TABLE IF NOT EXISTS `azufre` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `No_Muestra` varchar(11) NOT NULL,
  `ID_Muestra` varchar(128) DEFAULT 'Unknown',
  `Type_Muestra` varchar(128) DEFAULT 'Unknown',
  `Fosforo` varchar(128) DEFAULT 'N.D',
  `Abs` varchar(128) NOT NULL,
  `Wavelengtn` varchar(128) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canton`
--

CREATE TABLE IF NOT EXISTS `canton` (
  `id_canton` int(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `id_provincia` int(1) NOT NULL,
  PRIMARY KEY (`id_canton`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Volcado de datos para la tabla `canton`
--

INSERT INTO `canton` (`id_canton`, `nombre`, `id_provincia`) VALUES
(1, 'Alajuela', 2),
(2, 'San Ramón', 2),
(3, 'Grecia', 2),
(4, 'San Mateo', 2),
(5, 'Atenas', 2),
(6, 'Naranjo', 2),
(7, 'Palmares', 2),
(8, 'Poás', 2),
(9, 'Orotina', 2),
(10, 'San Carlos', 2),
(11, 'Alfaro Ruiz', 2),
(12, 'Valverde Vega', 2),
(13, 'Upala', 2),
(14, 'Los Chiles', 2),
(15, 'Guatuso', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(50) NOT NULL,
  `canton` varchar(50) NOT NULL,
  `distrito` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `provincia`, `canton`, `distrito`, `direccion`, `id_persona`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(1, 'Alajuela', 'San Carlos', 'Quesada', 'Sucre, 200mts Sureste y 50mts Noroeste del salon comunal', 2, '2014-04-14', 'admin', '2014-04-14', 'admin'),
(2, '0', '0', '0', 'Muelle, 20mts Norte del Cen-cinai, frente a empacadora grupo coral', 4, '2014-04-14', 'admin', '2014-04-14', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distrito`
--

CREATE TABLE IF NOT EXISTS `distrito` (
  `id_distrito` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `id_canton` int(2) NOT NULL,
  PRIMARY KEY (`id_distrito`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Volcado de datos para la tabla `distrito`
--

INSERT INTO `distrito` (`id_distrito`, `nombre`, `id_canton`) VALUES
(1, 'Quesada', 10),
(2, 'Florencia', 10),
(3, 'Buenavista', 10),
(4, 'Aguas Zarcas', 10),
(5, 'Venecia', 10),
(6, 'Pital', 10),
(7, 'La Fortuna', 10),
(8, 'La Tigra', 10),
(9, 'Palmera', 10),
(10, 'Venado', 10),
(11, 'Cutris', 10),
(12, 'Monterrey', 10),
(13, 'Pocosol', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE IF NOT EXISTS `factura` (
  `id_factura` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `costo` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestra`
--

CREATE TABLE IF NOT EXISTS `muestra` (
  `codigo` varchar(11) NOT NULL,
  `campo` varchar(100) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestra_analisis`
--

CREATE TABLE IF NOT EXISTS `muestra_analisis` (
  `id_muestra_analisis` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `costo` int(11) NOT NULL,
  `codigo` varchar(11) NOT NULL,
  `id_factura` int(11) NOT NULL,
  `id_analisis` int(4) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_muestra_analisis`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE IF NOT EXISTS `noticia` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `encabezado` varchar(30) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `cuerpo` text NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`id_noticia`, `encabezado`, `descripcion`, `cuerpo`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(1, 'Importación de café a Costa Ri', 'Un polémico proyecto de eliminación de basura en San Ramón, Alajuela, que se discutía desde hacía cuatro años, fue sepultado ayer por el Concejo Municipal.', 'Un polémico proyecto de eliminación de basura en San Ramón, Alajuela, que se discutía desde hacía cuatro años, fue sepultado ayer por el Concejo Municipal.', '2014-06-09', 'Admin', '2014-06-09', 'Admin'),
(2, 'San Ramón sepulta polémico pla', 'Un polémico proyecto de eliminación de basura en San Ramón, Alajuela, que se discutía desde hacía cuatro años, fue sepultado ayer por el Concejo Municipal.', 'Un polémico proyecto de eliminación de basura en San Ramón, Alajuela, que se discutía desde hacía cuatro años, fue sepultado ayer por el Concejo Municipal.', '2014-06-10', 'Admin', '2014-06-10', 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE IF NOT EXISTS `persona` (
  `id_persona` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido1` varchar(30) NOT NULL,
  `apellido2` varchar(30) NOT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `telefono` int(8) NOT NULL,
  `usuario` varchar(15) NOT NULL,
  `clave` varchar(15) NOT NULL,
  `tipo` int(1) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `nombre`, `apellido1`, `apellido2`, `correo`, `telefono`, `usuario`, `clave`, `tipo`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(2, 'Jorge', 'Rojas', 'Aragonés', 'jeragones@gmail.com', 86758925, 'jeragones', '1234', 3, '2014-04-14', 'fabiva', '2014-04-14', 'jeragones'),
(4, 'Daniel', 'Berrocal', 'Ramirez', NULL, 81952655, 'jdbr123', '12345', 3, '2014-04-14', 'fabiva', '2014-04-14', 'fabiva'),
(6, 'Fabian ', 'Vargas', 'Hernández', 'fabian@itcr.ac.cr', 24601832, 'fabiva', '12345', 2, '2014-04-14', 'Admin', '2014-04-14', 'Admin'),
(7, 'Admin', 'Admin', 'Admin', 'labagronomico@itcr.ac.cr', 89658474, 'Admin', 'admin123', 1, '2014-04-21', 'Admin', '2014-04-21', 'Admin'),
(8, 'Sailim', 'Rojas', 'Valerio', 'sailim@itcr.ac.cr', 87325821, 'sailim', '12345', 2, '2014-05-18', 'Admin', '2014-05-18', 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE IF NOT EXISTS `provincia` (
  `id_provincia` int(1) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(15) NOT NULL,
  PRIMARY KEY (`id_provincia`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id_provincia`, `nombre`) VALUES
(1, 'San José'),
(2, 'Alajuela'),
(3, 'Cartago'),
(4, 'Puntarenas'),
(5, 'Heredia'),
(6, 'Limón'),
(7, 'Guanacaste');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE IF NOT EXISTS `reporte` (
  `id_reporte` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `metodologia` varchar(100) NOT NULL,
  `observaciones` varchar(300) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_reporte`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado_analisis`
--

CREATE TABLE IF NOT EXISTS `resultado_analisis` (
  `id_resultado_analisis` int(11) NOT NULL AUTO_INCREMENT,
  `id_muestra_analisis` int(11) NOT NULL,
  `id_reporte` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_resultado_analisis`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado_elemento`
--

CREATE TABLE IF NOT EXISTS `resultado_elemento` (
  `id_resultado_elemento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `resultado` varchar(20) NOT NULL,
  `id_resultado_analisis` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_resultado_elemento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefono`
--

CREATE TABLE IF NOT EXISTS `telefono` (
  `id_persona` int(11) NOT NULL,
  `numero` int(9) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `telefono`
--

INSERT INTO `telefono` (`id_persona`, `numero`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(7, 24606262, '2014-05-17', 'Admin', '2014-05-17', 'Admin'),
(2, 86758675, '2014-05-20', 'jeragones', '2014-05-20', 'jeragones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `puesto` varchar(50) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `id_persona` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `puesto`, `imagen`, `Descripcion`, `id_persona`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(1, 'Asistente', '/images/Administrator.png', NULL, 6, '2014-04-14', 'Admin', '2014-06-11', 'Admin'),
(2, 'Asistente de Laboratorio', '/images/Administrator.png', 'Administrativa', 8, '2014-05-18', 'Admin', '2014-06-11', 'Admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
