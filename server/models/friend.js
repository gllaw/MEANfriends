console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({							//Built friend schema...
  name: {type: String, required: true, minlength:2, trim: true},
  favoriteLanguage: {type: String, required: true, maxlength: 20, trim: true}
}, {timestamps: true});
mongoose.model('Friend', FriendSchema);								//...and added it to the mongoose.models.

// var Friend = mongoose.model("Friend"); 		//already on controller friends.js, which is why it's not here?