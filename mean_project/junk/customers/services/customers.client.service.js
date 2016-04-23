'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('customers').factory('Customers', ['$resource',
	function($resource) {
		return $resource('customers/:customerId', {
			customerId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
