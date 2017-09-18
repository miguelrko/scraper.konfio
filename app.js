const express = require('express');

const scrapperController = require('./api/scrapperController.js');
const retrieveDbController = require('./api/retrieveDbController.js');

const app = express();
app.use('/products', retrieveDbController);
app.use('/sources', scrapperController);

module.exports = app;





// request({
// 	url: 'https://www.amazon.com.mx/b/ref=nav_shopall_mobile?ie=UTF8&node=9687422011'
// }, (err, response, body) => {
// 	if(!err){
// 		var $ = cheerio.load(body);
// 		var names = []
// 		var prices = []
// 		var product = []
// 		//*****************************************
// 		//CAMBIAR EL APPROACH, NO IR POR EL PRODUCTO Y LUEGO POR EL PRECIO. IR DIRECTAMENTE POR TODO EL PRODUCTO Y LUEGO SEPARAR ACA.
// 		//*****************************************
// 		//console.log($('.s-item-container').text());
// 		//console.log($('.s-item-container .a-spacing-mini .a-spacing-none .s-access-detail-page, .s-item-container .a-fixed-left-grid .a-fixed-left-grid-inner .a-col-right .a-spacing-small .a-spacing-none .s-access-detail-page').attr('title'));
// 		//console.log($('.s-item-container .a-fixed-left-grid .a-fixed-left-grid-inner .a-col-right .a-spacing-small .a-spacing-none .s-access-detail-page').attr('title'));
// //		console.log($.html());
// 		//console.log($('.s-item-container .a-fixed-left-grid .a-fixed-left-grid-inner .a-col-right .a-row .a-span7 .a-spacing-none .a-link-normal .s-price').html());
// 		//console.log($('.products-list ul .product-cell a.product-name span').html());
// 		 // $('.products-list ul .product-cell a.product-name span').each(function(i, elem){
// 		 // 	names[i] = $(this).text().split('\n',1)[0];
// 		 // });
// 		// $('.products-list ul .product-cell span.price-amount').each(function(i, elem){
// 		// 	prices[i] = $(this).html().split('<sup>',1)[0];
// 		// });
// 		//***************************
// 		//Funcional para Amazon (Nombre producto):
// 		// $('.s-item-container .a-spacing-mini .a-spacing-none .s-access-detail-page, .s-item-container .a-fixed-left-grid .a-fixed-left-grid-inner .a-col-right .a-spacing-small .a-spacing-none .s-access-detail-page').each(function(i, elem){
// 		//  	names[i] = $(this).attr('title');
// 		//  });
// 		//***************************
// 		//Funcional para Amazon menos para los libros. (Precio):
// 		// $('.s-item-container .a-row .a-link-normal .s-price').each(function(i, elem){
// 		//  	prices[i] = $(this).html();
// 		//  });
// 		//***************************
// 		//fs.writeFileSync('amazonbooks.html', $('.s-item-container'));
// 		$('.s-item-container').each(function(i, elem){
// 			var data = $(this);
// 			product[i] = [
// 				'Amazon',
// 				data.find('.a-spacing-mini, .a-row').find('.a-spacing-none').find('.s-access-detail-page').find('h2').text(),
// 				data.find('.a-row').find('.a-link-normal').find('.a-color-price').first().text()
// 			]
// 			//console.log(product[i]);
// 		});
// 		// console.log(product[0].price);
// 		// console.log(product[1].name);
// 		// console.log(product[23].name);
// 		// for( x in names){
// 		// 	product[x] = {
// 		// 		name: names[x],
// 		// 		price: prices[x]
// 		// 	};
// 		// }
// 		// console.log(product);
// 		// console.log(names.length);
// 		// console.log(prices.length);
// 		// console.log(prices.join(', '));
		
// 		//db.saveProducts(product);
// 		db.showProducts();
// 	}else{
// 		console.log(err);
// 	}
// }); 