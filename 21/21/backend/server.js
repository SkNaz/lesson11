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

app.get('/', function (req, res) { // req - обьект запроса, res -- обьект ответа
    // fs.readFile("a.json", 'utf-8', function(err, content) {
    //   res.send(content);
    // });


    /*fs.writeFile("a.json", JSON.stringify(['1']), (err) => {
      if (err) console.log(err);

      console.log("Successfully Written to File.");
    });*/

});

app.get('/user', function (req, res) { // req - обьект запроса, res -- обьект ответа

  res.send('552');

});


app.post('/user', function(req, res) {

  const a = req.body;
  var income = JSON.parse(a);
  console.log(income);

  fs.readFile("users.json", "utf-8", function(err, content) {

    var data = JSON.parse(content);
    console.log(data);
    
    for(var i = 0; i < data.length; i++) {
      if(data[i].login == income.login) {
        res.send(data[i].id);
      }
    } 

    res.status(401).send("NOT FOUND");

  });

});

app.post('/goods', function(req, res) {
  const id = req.body;
  var parse = JSON.parse(id);

  fs.readFile("goods/"+ parse + ".json", "utf-8", function(err, content) {
      var subject = JSON.parse(content);
      var aga = JSON.stringify(subject);
      res.send(aga);
  });

});


app.listen(3000, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
  console.log('Example app listening on port http://localhost:3000/');
});
