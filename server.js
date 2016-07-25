const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


/* app setting */
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);
const request = require('request');

// sass setting
const sassMiddleware = require('node-sass-middleware');
const srcPath = __dirname + '/sass';
const destPath = path.join(__dirname + '/public/css');

// sassMiddleware
app.use(sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'compressed',
  prefix: '/prefix'
}));

// parse incoming forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static route to public
app.use(express.static(path.join(__dirname, 'public')));

// log
app.use(logger('dev'));

/*Views*/
app.set('views', './views');
app.set('view engine', 'ejs');

/* Routes */
app.get('/', function(req, res){
  res.render('pages/index')
})

app.get('/faq', function(req, res){
  res.render('pages/faq')
})

app.get('/programs', function(req, res){
  res.render('pages/programs')
})

app.get('/request', function(req, res){
  res.render('pages/request')
})

app.get('/why', function(req, res){
  res.render('pages/why')
})
