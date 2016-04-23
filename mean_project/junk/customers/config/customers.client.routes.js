'use strict';

// Setting up route
angular.module('customers').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
			state('listCustomer', {
				url: '/customers',
				templateUrl: 'modules/customers/views/list-customer.client.view.html'
			}).

			state('viewCustomer', {
				url: '/customer/:customerId',
				templateUrl: 'modules/customer/views/list-customer.client.view.html'
			});

	}
]);
