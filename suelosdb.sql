-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2014 a las 00:27:08
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.9

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
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(10) NOT NULL,
  `canton` varchar(20) NOT NULL,
  `distrito` varchar(30) NOT NULL,
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
(2, 'Alajuela', 'San Calos', 'Florencia', 'Muelle, 20mts Norte del Cen-cinai, frente a empacadora grupo coral', 4, '2014-04-14', 'admin', '2014-04-14', 'admin');

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
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
  `usuario` varchar(15) NOT NULL,
  `clave` varchar(15) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `nombre`, `apellido1`, `apellido2`, `correo`, `usuario`, `clave`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(2, 'Jorge', 'Rojas', 'Aragones', 'jeragones@gmail.com', 'jeragones', '12345', '2014-04-14', 'admin', '2014-04-14', 'admin'),
(4, 'Daniel', 'Berrocal', 'Ramirez', NULL, 'jdbr123', '12345', '2014-04-14', 'admin', '2014-04-14', 'admin'),
(6, 'Fabian ', 'vargas', 'Hernandez', 'fabian@itcr.ac.cr', 'fabiva', '12345', '2014-04-14', 'admin', '2014-04-14', 'admin');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `puesto` varchar(20) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `id_persona` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `usuario_creacion` varchar(30) NOT NULL,
  `fecha_actualizacion` date NOT NULL,
  `usuario_actualizacion` varchar(30) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `puesto`, `imagen`, `id_persona`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(1, 'Asistente', NULL, 6, '2014-04-14', 'admin', '2014-04-14', 'admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
