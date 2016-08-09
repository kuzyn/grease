const request = require('request');
const express = require('express');
const cheerio = require('cheerio');
const app = express();

app.get('/', function(req, res) {
	//res.send('hello you');
	var url = 'http://montreal.craigslist.ca/search/m4m?lang=en&cc=us'
	var result;

	request(url, function(error, response, html) {
	
		if(!error) {
			result = response;
		} else {
			result = error;
		}
		res.send(result.body);
	});
});

app.listen('3000');

console.log('started on 3000');

xports = module.exports = app;
