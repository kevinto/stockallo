
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
var http = require('http');
var path = require('path');
var errorhandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, '/public/views')));
// app.use(express.static(path.join(__dirname, '/views')));

// Development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

// app.get('/', routes.index);
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

var port = process.env.PORT || 3000;
var hostName = process.env.IP || "0.0.0.0";
app.listen(port, hostName, function(){
  console.log('Listening on port ' + port + " " + "with hostname " + hostName);
});
