'use strict'
var express = require('express');
var app = express();
var mysql = require('mysql');
var express = require('./config/express');

var app = express();
var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lcc_system'
});

connection.connect();

connection.query('SELECT * from students', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

app.get('/', function (req, res) {
  res.send('BABABAA');
});

app.post('/login', urlencodedParser,function(req,res){
 data = {username: req.body.username,
   password: req.body.password};
 res.end(JSON.stringify(data));

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

