const request = require('request');
const express = require('express');
const cheerio = require('cheerio');
const app = express();

app.get('/', function(req, res) {
  //res.send('hello you');
  var urlCars= 'http://montreal.craigslist.ca/search/cta'
  var urlCasual = 'http://montreal.craigslist.ca/search/m4m?lang=en&cc=us'
  var resultCars;
  var resultCasual;

  request.get(urlCars) 
    .on('error', function(err) {
      // not okay
      console.log(err);
    })
    .on('response', function(response) {
      if(response.statusCode === 200) {
        // okay
        console.log('cars');
        resultCars = response;
        showPage(resultCars, resultCasual);
      }
    }); 


  function showPage(body1, body2) {
    console.log(body1, body2); 
    
    if(resultCars) {
      res.send(resultCars);
    } else {
      res.send('<p>oo</p>');
    }

  }
});

app.listen('3000');

console.log('started on 3000');

xports = module.exports = app;
