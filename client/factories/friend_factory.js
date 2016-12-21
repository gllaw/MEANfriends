console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http){                     // constructor for our factory.
  // var friends = [];
  // var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(friendId, friendInfo, callback){
      $http.put('/friends/'+friendId, friendInfo).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback();
        }
      })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
 //Note: this can be shortened to $http.get('/friends').then(callback); but only if you only want to run the callback from the controller.
    };
    this.delete = function(friendId, callback){
        $http.delete('/friends/'+friendId).then(function(){
          if (typeof(callback) == 'function'){
            callback();
          }
        })
    };
    this.show = function(friendId, callback){
        $http.get('/friends/'+friendId).then(function(returned_data){
          console.log('made it to the factory:', returned_data.data);
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          }
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    // this.getFriend = function(callback){
    //     callback(friend);
    // };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);