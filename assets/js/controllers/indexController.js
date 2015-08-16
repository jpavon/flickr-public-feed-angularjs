angular.module('app')
	.controller('IndexController', ['$scope', 'ApiService', function($scope, ApiService) {
		ApiService.then(function(data) {
			$scope.images = data;
		});
	}]);
