var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

// Read in the contents of the html file.
// The function fs.readFile returns a buffer unless an encoding is specified.
//var buf = fs.readFileSync('index.html');
var text = fs.readFileSync('index.html','utf8')

//
// Convert that buffer to a string.
//var text = buf.toString();

app.get('/', function(request, response) {
  response.send('Hi Me!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
