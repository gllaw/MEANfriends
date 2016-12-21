app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', 
// note that we are using $routeParams because in routes we indicated that a string will be sent through the url via the _id property.
  function($scope, friendsFactory, $routeParams, $location) {       //if injected above don't forget to add in as an argument.
      // console.log('editController loaded');
      // console.log("$routeParams currently looks like this:", $routeParams);

//OUR $scope.update function goes here <-- $scope because we need to access this method with ng-submit or ng-click (from the form in the previous assignment). Want to see all of the friends when we get back including the updated on?? See Index in the previous controller.
  friendsFactory.show($routeParams.id, function(friendFromServer){
    $scope.friend = friendFromServer
    // console.log($scope.friend)
  })

  $scope.updateFriend = function(){
    friendsFactory.update($scope.friend._id, $scope.editedFriend, function(friendFromServer){
      $location.url('/new')
    })
  }

}]);