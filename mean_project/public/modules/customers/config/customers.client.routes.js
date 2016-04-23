  'use strict';

  angular
    .module('customers').config(['$stateProvider',function($stateProvider){

		  $stateProvider.state('listCustomer',{
			  url:'/customers',
			  templateUrl:'modules/customers/views/list-customer.client.view.html'

		  })
		  .state('createCustomer',{
			  url:'/customers/create',
			  templateUrl:'modules/customers/views/create-customer.client.view.html'

		  })



	  }
	  ]);



