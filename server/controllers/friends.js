console.log('friends controller');
//Built the methods in the friendsControllers below.
var mongoose = require('mongoose')                //This is how the controller knows to talk to mongoose...
var Friend = mongoose.model('Friend');            //...and get a model.

function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, results){
      if(err){
        console.log(err)
      } else{
        res.json(results);
      }
      
    })
  };

  this.create = function(req,res){
    Friend.create(req.body, function(err, result){
      if(err){
        console.log("Couldn't create newFriend.", err)
      }else{
        res.json(result)
      }
    })
  };

  this.update = function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log("Couldn't find friend to update.", err);
      }
      else{
        friend.name = req.body.name;
        friend.favoriteLanguage = req.body.favoriteLanguage;
        friend.save(function(err, updatedFriend){
          if (err){
            console.log("Couldn't save friend update.", err);
          }
          else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log("Couldn't delete friend.", err);
      }else{
        console.log('just deleted the user')
        res.json({message: "Friend deleted!"});
      }
    })
  };
  this.show = function(req,res){
    console.log('reached the show method in server')
    Friend.findOne({_id: req.params.id}, function(err, result){
      if(err){
        console.log("Couldn't find friend to show you.", err);
      }
      else{
        console.log('we made it, got:', result)
        res.json(result);
      }
    })
  };
}
module.exports = new FriendsController();              // This exports the entire controller as a function, full of methods that callback model methods to return json data.