angular.module('app')
	.filter('authorUrl', function () {
		return function(input) {
			return 'https://www.flickr.com/photos/' + input;
		};
	});
