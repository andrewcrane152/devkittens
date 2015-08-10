angular.module('devKittens')

.controller('HomeController', function ($scope, authService, $location) {


	$scope.login = function(user){
		authService.login(user.email, user.password)
		.then(function(response){
			$location.path('/dashboard');
		})
		.catch(function (err) {
			$scope.messageText = "Wrong email/password combination.";
			return $scope.displayAlert = true;
		})
	}


});