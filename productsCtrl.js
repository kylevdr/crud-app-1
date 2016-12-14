var app = require('./server');
var db = app.get('db');

module.exports = {

create: (req, res) => {
  db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl], (err, response) => {
    res.status(200).send('Product created');
  });
},

getOne: (req, res) => {
  db.read_product([req.params.id], (err, response) => {
    res.status(200).send(response);
  });
},

getAll: (req, res) => {
  db.read_products((err, response) => {
    res.status(200).send(response);
  });
},

update: (req, res) => {
  // if (req.qery.desc) {
    db.update_product([req.params.id, req.query.desc], (err, response) => {
      res.status(200).send('Product updated');
    });
  // } else {
  //   res.status(400).send('Enter a description in the format ...?desc=<description>');
  // }
},

delete: (req, res) => {
  db.delete_product([req.params.id], (err, response) => {
    res.status(200).send('Product deleted');
  });
},

};
