angular.module('app')
	.controller('ShowController', ['$scope', 'ApiService', '$routeParams', function($scope, ApiService, $routeParams) {
		ApiService.then(function(data) {
			$scope.image = data[$routeParams.id];
		});
	}]);
