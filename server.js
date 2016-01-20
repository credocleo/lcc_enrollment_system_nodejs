'use strict'
var express = require('express');
var mysql = require('mysql');
var express = require('./config/express');
var bodyParser = require('body-parser');
var app = express();
var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '',
	database: 'lcc'
});
console.log('test');
connection.connect();

connection.query('SELECT * from students', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.query('SELECT * from user WHERE username="lacon" AND password="admin2015"', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});


connection.end();

app.get('/', function (req, res) {
  res.send('/public/index.html');
});

app.post('/login', bodyParser.urlencoded(),function(req,res){
 var data = {username: req.body.username,
   password: req.body.password};
 res.end(JSON.stringify(data));

}); 
app.get('/login',function(req,res){
var data = {username: req.query.username,
   password: req.query.password};
 res.end(JSON.stringify(data));

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

