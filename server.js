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

connection.connect();

app.get('/', function (req, res) {
  res.send('/public/index.html');
});

app.post('/login', bodyParser.urlencoded(),function(req,res){
 var data = {username: req.body.username,
   password: req.body.password};

  var result_success = {"success": true};
  var result_fail = {"success": false};
  connection.query("select * from user where username = '"+data.username+"' AND password = '"+data.password+"'", function(err, rows, fields) {
      if(err) throw err;

      if(rows.length > 0){
          result_success.account_type = rows[0].account_type;
          res.end(JSON.stringify(result_success));
      }
      else{
          res.end(JSON.stringify(result_fail));
      }
  });

}); 
app.get('/login',function(req,res){
var data = {username: req.query.username,
   password: req.query.password};
 res.end(JSON.stringify(data));
});

connection.end();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

