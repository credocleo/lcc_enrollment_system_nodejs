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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

