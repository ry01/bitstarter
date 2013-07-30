var express = require('express');
var app = express();
app.use(express.logger());

// Read in the contents of the html file.
// The function fs.readFile returns a buffer unless an encoding is specified.
var buf = fs.readFile('index.html');

//
// Convert that buffer to a string.
var string = buf.toString();

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
