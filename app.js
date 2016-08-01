var ex = require("./lyrics.js"); //this file is in the same directory as the current file.

var http = require('http');



// console.log(ex[selection]);

http.createServer(function(request, response) {
  var selection = Math.floor(Math.random() * ex.length);
  response.writeHead(200, {
    "Content-type": "text/plain"
  }); response.write(ex[selection]);
response.end();
}).listen(8888);
