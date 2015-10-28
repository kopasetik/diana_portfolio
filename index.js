var express = require('express')
var app = express();

app.use(express.static('assets'));
app.set('view engine', 'jade');

app.route('/')
  .get(function(req, res){
    res.render('index')
  })

app.listen(4400)
