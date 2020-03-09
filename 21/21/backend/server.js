var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/user', function(req, res) {

  const a = req.body;
  var income = JSON.parse(a);
  console.log(income);

  fs.readFile("users.json", "utf-8", function(err, content) {

    var data = JSON.parse(content);
    console.log(data);
    let results = data.filter(item => item.login == income.login && item.password == income.password);
    if(results == null) {
      res.status(401).send("NOT FOUND");
    } else {
      res.send(results[0].id);
    }
  });

});

app.post('/goods', function(req, res) {
  const id = req.body;
  var parse = JSON.parse(id);

  fs.readFile(`goods/${parse}.json`, "utf-8", function(err, content) {
      res.send(content);
  });

});


app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000/');
});
