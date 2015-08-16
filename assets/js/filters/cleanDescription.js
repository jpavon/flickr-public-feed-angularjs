var trim = require('trim');
var $ = require('jquery');



angular.module('app')
	.filter('cleanDescription', function () {
		return function(input) {
			var $html = $('<div></div>').append($.parseHTML(input));
			$html.find('p:nth-child(1), p:nth-child(2)').remove();
			var output = trim($html.text());
			return output || 'No description available.';
		};
	});
