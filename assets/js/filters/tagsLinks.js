angular.module('app')
	.filter('tagsLinks', function () {
		return function(input) {
			var output = '';
			var arr = String(input).split(' ');
			arr.forEach(function(tag) {
				output += '<a href="https://www.flickr.com/search/?tags=' + tag + '" target="_blank">' + tag + '</a>';
			});
			return output;
		};
	});
