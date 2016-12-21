app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
  console.log('newController loaded');          //when your index.html page loads, you should see this line. Otherwise make sure your controller syntax is correct and that you have included the controller script file.

//IF YOU WERE USING "THIS" INSTEAD OF "$SCOPE".
  // var self = this;
  // self.newFriend = {};          //Optional, bc angular is smart enough to know you have a newCtrller.newFriend object from your ng-model.
  // Using the ng-model on the view, angular will determine that two properties will need to be added to this object: name and favlang.

//This method accesses the friendsFactory and runs the friends index. We'll use index pretty often so set the method to a variable for easy access.
    var index = function(){
      friendsFactory.index(function(returnedData){
        $scope.friends = returnedData;
      });
    };
    index();                         //running it right after it was defined.

    $scope.create = function(){     //If someone clicks on an element with ng-click="newCtrller.create()" it triggers this function.
      console.log('Create Friend clicked! $scope.newFriend:', $scope.newFriend);     //$scope.newFriend is the variable that we want to pass into the factory method.
      // if (!self.newFriend.name || !self.newFriend.favoriteLanguage){        //if required fields are not filled don't proceed.
        // console.log('required fields not present');
        // return;
      // }
      // else{
        // console.log('All required fields present, and the self.newFriend on the controller (which is also newCtrller.newFriend on the partial) looks like this:', self.newFriend);     //not using "this".
        friendsFactory.create($scope.newFriend, index);
        $scope.newFriend = {};      //clears form inputs after submission.
      // }
    }

    // $scope.delete = function(){
    //   friendsFactory.delete($scope.friend);
    // }
    $scope.delete = function(friendID){
      console.log('we got to delete!!!!')
      console.log(friendID)
      friendsFactory.delete(friendID, function(){
        console.log("just got to the callback")
        index();
      })
    }


    //Want to all of the friends when we get back?  We can re-run index.

}]);
