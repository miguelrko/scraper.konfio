const request = require('request');
const cheerio = require('cheerio');

const db = require('./data-base.js');

var ScrapperProducts = (req, res)=> {
	request({
	url : req.query.url
	}, (err, response, body) => {
		if(!err){
			var $ = cheerio.load(body);
			var products = []
			var count=0;
			var store = req.query.store.toLowerCase();
			switch(store) {
				case 'amazon':
					$('.s-item-container').each(function(i, elem){
						var data = $(this);
						products[i] = [
							store,
							data.find('.a-spacing-mini, .a-row').find('.a-spacing-none').find('.s-access-detail-page').find('h2').text(),
							data.find('.a-row').find('.a-link-normal').find('.a-color-price').first().text()
						]
						count++;
						if(count == req.query.howmany) return false;
					});
				break;
				case 'linio':
					$('.catalogue-product').each(function(i, elem){
						var data = $(this);
						products[i] = [
							store,
							data.find('.detail-container').find('h2').text(),
							data.find('.detail-container').find('.price-section').find('.price-secondary').first().text()
						]
						count++;
						if(count == req.query.howmany) return false;
					});
				break;
				default:
					res.json({'Message' : `El almacen ${store} no esta dentro de la lista disponible de sitios para realizar scraping.`});
					return;

			}
			db.saveProducts(products);
			res.json({'Status' : `La informacion fue recuperada de ${store}.`, 'Total' : `${req.query.howmany} Productos fueron solicitados, se retornaron ${count}.`});
		}else{
			console.log(err);
			res.json({'Message' : `${err}`});
			return;
		}
	});
}
module.exports = {
	ScrapperProducts
};