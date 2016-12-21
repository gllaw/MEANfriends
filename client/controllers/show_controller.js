app.controller('showController', ['$scope','$routeParams', '$location', 'friendsFactory', function($scope, $routeParams, $location, friendsFactory) {
	
	friendsFactory.show($routeParams.id, function(friendFromFactory){
		$scope.friend = friendFromFactory;
	})

	$scope.delete = function(friendID){
      console.log('we got to delete!!!!')
      console.log(friendID)
      friendsFactory.delete(friendID, function(){
        console.log("just got to the callback")
        $location.url('/new')
      })
    }
}]);