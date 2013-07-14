var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());

var indexContents=fs.readFileSync(index.html);
var buffer=new Buffer(indexContents);
var bufferoutput = buffer.toString();

app.get('/', function(request, response) {
  response.send(bufferoutput);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
