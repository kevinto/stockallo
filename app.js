
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
var path = require('path');
var errorhandler = require('errorhandler');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// Setup db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo-api')
  .then(() =>  console.log('Mongodb connection successful'))
  .catch((err) => console.error(err));

var app = express();  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// This needs to be above any routing in order to get the body correctly
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Sample TODO
var todos = require('./routes/todos');
var routes = require('./routes/index');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.methodOverride());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, '/public/views')));
// app.use(express.static(path.join(__dirname, '/views')));

// Development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

app.use('/', routes);
app.use('/todos', todos);

var port = process.env.PORT || 3000;
var hostName = process.env.IP || "0.0.0.0";
app.listen(port, hostName, function(){
  console.log('Listening on port ' + port + " " + "with hostname " + hostName);
});
