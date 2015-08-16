var moment = require('moment');



angular.module('app')
	.filter('dateFormat', function () {
		return function(input) {
			return moment(input).format('[Published:] Do MMMM YYYY [at] HH:mm');
		};
	});
