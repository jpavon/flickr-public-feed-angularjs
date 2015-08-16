var angular = require('angular');



/**
 * Routes
 */
angular.module('app', [require('angular-route'), require('angular-sanitize')])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'IndexController',
				templateUrl: 'index.html',
			})
			.when('/images/:id', {
				controller: 'ShowController',
				templateUrl: 'show.html',
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);


/**
 * Services
 */
require('./services/flickrApi');

/**
 * Controllers
 */
require('./controllers/indexController');
require('./controllers/showController');

/**
 * Filters
 */
require('./filters/authorUrl');
require('./filters/cleanDescription');
require('./filters/dateFormat');
require('./filters/tagsLinks');
