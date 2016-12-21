var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


// Setting up body-parser
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

// add directory for static files you wrote to serve html and js files to the browser
app.use(express.static('client'));
// also add a directory for static files from the bower library
app.use(express.static('bower_components'));

// require mongoose configuration, use path.join to build the route
require(path.join(__dirname, 'server/config/mongoose.js'));
// require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(__dirname, 'server/config/routes.js'))(app);


// start the server
app.listen(8000, function(){
  console.log('listening on port 8000');
});
