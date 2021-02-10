const express = require("express");
const app = express();

const handlebars = require('express-handlebars');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});


//set appp to use handlebars engine
app.set('view engine', 'hbs');

//set handlebars config
app.engine('hbs',handlebars({
  layoutsDir:__dirname+'/views/layouts',
  extname: 'hbs',
  defultLayout: 'planB',
  partialsDir:__dirname + '/views/partials/'
}));


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//ROUTES for merchandice
app.get('/',(req,res) =>{
res.render('main',{layout: 'index'});
});

app.listen(process.env.PORT||8080);
