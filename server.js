var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var app = module.exports = express();

var port = 3000;
var corsOptions = {
  origin: 'http://localhost:3000'
};

var username = 'kylevanderiet';
var database = 'sandbox';
var connectionString = `postgres://${username}@localhost/${database}`;
var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);
var db = app.get('db');
var productsCtrl = require('./productsCtrl');


app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/api/products', productsCtrl.getAll)

app.get('/api/product/:id', productsCtrl.getOne)

app.put('/api/product/:id', productsCtrl.update)

app.post('/api/product', productsCtrl.create)

app.delete('/api/product/:id', productsCtrl.delete)

app.listen(port, function() {
  console.log('Listening on port', port);
});
