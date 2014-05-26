-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2014 a las 23:45:24
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

INSERT INTO `persona` (`id_persona`, `nombre`, `apellido1`, `apellido2`, `correo`, `usuario`, `clave`, `tipo`, `fecha_creacion`, `usuario_creacion`, `fecha_actualizacion`, `usuario_actualizacion`) VALUES
(2, 'Jorge', 'Rojas', 'Aragones', 'jeragones@gmail.com', 'jeragones', '12345', 3, '2014-04-14', 'fabiva', '2014-04-14', 'fabiva'),
(4, 'Daniel', 'Berrocal', 'Ramirez', NULL, 'jdbr123', '12345', 3, '2014-04-14', 'fabiva', '2014-04-14', 'fabiva'),
(6, 'Fabian ', 'Vargas', 'Hernández', 'fabian@itcr.ac.cr', 'fabiva', '12345', 2, '2014-04-14', 'Admin', '2014-04-14', 'Admin'),
(7, 'Admin', 'Admin', 'Admin', 'labagronomico@itcr.ac.cr', 'Admin', 'admin123', 1, '2014-04-21', 'Admin', '2014-04-21', 'Admin'),
(8, 'Sailim', 'Rojas', 'Valerio', 'sailim@itcr.ac.cr', 'sailim', '12345', 2, '2014-05-18', 'Admin', '2014-05-18', 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE IF NOT EXISTS `noticia` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(128) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `Description` varchar(500) NOT NULL,
  `Body` varchar(5000) NOT NULL,
  `persona` int(11) NOT NULL,
  PRIMARY KEY (`id_noticia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

insert into noticia(Title,fecha_creacion,Description,Body,persona)values(
	'Los pros y los contras de las Google Glass',
	 (SELECT LOCALTIMESTAMP()),
	'Todo el mundo conoce las gafas de Google. Pero tras toda nueva tecnología nos topamos rápidamente con pros y contras. En este caso la creciente necesidad de desarrollo de aplicaciones para Google Glass.',
	'Todo el mundo conoe las gafas de Google. Pero tras toda nueva tecnología nos topamos rápidamente con pros y contras. En este caso la creciente necesidad de desarrollo de aplicaciones para Google Glass. Con estas nuevas gafas de alta tecnología, Google nos muestra que podemos hacer lo mismo que nuestro móvil inteligente o smartphone pero sin utilizar nuestras manos, únicamente con nuestra voz. En un principio nos topamos con que tiene algunas similitudes con el Siri de Apple, funcionalidad del iPhone que permite formular preguntas al teléfono y que éste las responda sin tener que teclear en la pantalla. Ventajas y pros de las Google Glass Como principal ventaja de las gafas de Google es, evidentemente, que no tienes que hacer nada, simplemente hablar. Son las gafas las que lo hacen todo por ti. Con simplemente ordenar las órdenes en voz alta o tan fácilmente como indicar las palabras ‘OK Glass‘ para iniciar el menú puedes hacer fotos o videos. Imágenes de muy buena calidad, de 5 megapíxeles y vídeos de alta resolución de 720 p. Algunos inconvenientes de las Google Glass Uno de los puntos de más controversia y de lo que más se han quejado aquellos que han probado las Google Glass es lo poco que dura la batería. Ésta dura apenas 5 horas, se carga por usb por la entrada alojada detrás de la oreja junto a la CPU. En condiciones de mucha luz, la pantalla pierde mucho visibilidad haciendo mucho más complicado ver lo que se muestra en ella. La imposibilidad de regular el brillo, o configurar cualquier otro aspecto de las Google Glass (como desactivar el Bluetooth por ejemplo) es otro de los inconvenientes del dispositivo a pesar de estar diseñado como el Android para móvil.',
	7
);


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
(1, 'Asistente', NULL, NULL, 6, '2014-04-14', 'admin', '2014-04-14', 'admin'),
(2, 'Encargada de Laboratorio', NULL, 'Administrativa', 8, '2014-05-18', 'admin', '2014-05-18', 'admin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
