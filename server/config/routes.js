var path = require('path');
var friends = require('./../controllers/friends.js');				//need this so it knows to route to that controller for anything to do with friends variable.

//these next couple of lines add routes to friends for 5 of the 7 RESTful routes, excluding new and edit.
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
};
