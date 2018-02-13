const express = require('express');
const app = express();
// const routes = require('./routes');
// const models = require('./models')
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');

module.exports = app;

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

//middleware
app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(1337, () => {
        console.log('yo server be listenin on 1337');
    });
app.get('/', function(req, res, next){
  res.render('index')
})
app.get('/experience', (req, res, next) => {
  res.render('experience')
})
app.get('/education', (req, res, next) => {
  res.render('education')
})
app.get('/skills', (req, res, next) => {
  res.render('skills')
})
app.get('/about', (req, res, next) => {
  res.render('about')
})

app.get('/projects', (req, res, next) => {
  res.render('projects')
})


app.get('/*', (req,res,next) => {
  res.render('practice')
})