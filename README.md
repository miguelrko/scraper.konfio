# README #

Información necesaria para el despliegue de la app de Scraping realizada con nodeJS v8.4.0

### Framework y dependencias necesarias: ###

* nodeJS v8+
* MySQL
* Postman (para realizar las pruebas)


### Configuracion ###

* Dirigirnos al directorios de nuestra aplicacion /scraper.konfio/
* mediante la consola, terminal o cmd y utilizar el comando 'npm install'
* El comando instalara todos los modulos que requiere la app para funcionar
* Creamos la base de datos en MySQL utilizando el script sql: scrapper.sql
* Configuramos los datos de conexion en data-base.js
* Desde el directorio base /scraper.konfio/ a traves de la consola, terminal o cmd
  podemos iniciar nuestra app mediante el comando 'node server.js'

### Como Funciona ###

Tomaremos como referencia el ambiente localhost para los ejemplos:

* Tenemos 2 endpoints:
http://localhost:3000/products/   <--- devuelve todos los productos almacenados en la BD

http://localhost:3000/sources/?url=https://www.linio.com.mx/cm/tienda-oficial-redlemon/hogar-y-vida-diaria&store=LIniO&howmany=7   <--- proceso de scraping, se deben pasar como parametros el 'url', el 'store' y 'howmany' que representan:
	* url: direccion del sitio al que se le realizara el scraping
	* store: nombre del almacen dueño del url. Actualmente funciona para Amazon y Linio, si se envia otro nombre de almacen se devuelve una respuesta de almacen no soportado por la app. Asi mismo, si se envia un url de Amazon y en store se envia Linio, el resultado sera vacio ya que la busqueda de los productos varia dependiendo del Store.
	* howmany: numero de productos a retornar, si se envia un numero mayor al numero de productos mostrados en la url, se devuelven todos los productos.

* El sistema cuenta con un sistema de autenticación: 'Basic Auth' el cual puede ser configurado en postman  como tipo de autorizacion. Actualmente los datos son Usuario: admin / Contraseña: welcome
  Dichos datos de usuario pueden ser modificados para cada endpoint en /api/retrieveDbController.js y /api/scrapperController.js


### Bugs actuales ###

* Si para una misma url, donde se muestran 10 productos, solicitamos 5 y en una segunda solicitud
solicitamos 10, la segunda solicitud no esta funcionando debido al bloqueo de unique en la base de datos
para la combinacion de almacen + nombre

### Contacto: ###
* correo:  miguelrko@hotmail.com
* celular: +52 5554967692
* skype:   miguelrkoz