angular.module('app')
	.factory('ApiService', ['$http', '$q', function ($http, $q) {
		var deferred = $q.defer();

		$http.jsonp('//api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
			.then(function(result) {
				deferred.resolve(result.data.items);
			});

		return deferred.promise;
	}]);
