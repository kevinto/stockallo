var express = require('express');
var app = express();

app.get('/', function(request, response) {
    var blocks = ['f', ' m', 'r'];
    response.send(blocks);
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log('Listening on port 3000');
});