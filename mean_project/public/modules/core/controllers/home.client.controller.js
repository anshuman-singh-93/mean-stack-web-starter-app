'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.alerts=[

			{	color:'btn-success',
				icon:'glyphicon-user',
				total:'13,333',
				descrp:'total customer'
			},
			{	color:'btn-primary',
				icon:'glyphicon-calender',
				total:'5555',
				descrp:'upcoming customer'
			},
			{	color:'btn-success',
				icon:'glyphicon-edit',
				total:'144',
				descrp:'new customer on 24 h'
			},
			{	color:'btn-info',
				icon:'glyphicon-record',
				total:'133',
				descrp:'emails sent'
			},
			{	color:'btn-warning',
				icon:'glyphicon-eye-open',
				total:'733',
				descrp:'follows up required'
			},
			{	color:'btn-danger',
				icon:'glyphicon-flag',
				total:'44,33',
				descrp:'refferal to moderate'
			}



		];

	}
]);
