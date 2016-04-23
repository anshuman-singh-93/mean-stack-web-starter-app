'use strict';

// Customer controller
var customerApp= angular.module('customers');
customerApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers','$modal','$log',
	function($scope, $stateParams, Authentication, Customers, $modal, $log) {

		this.authentication = Authentication;
		this.customers = Customers.query();
		this.modalcreate = function (size) {

			var modalInstance = $modal.open({
				templateUrl: 'modules/customers/views/create-customer.client.view.html',
				controller: function ($scope, $modalInstance) {
					$scope.ok = function () {
							$modalInstance.close();
					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},

				size: size
			});

			modalInstance.result.then(function (selectedItem) {
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};


		this.modalupdate = function (size,selectedcustomer) {

			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl:'modules/customers/views/edit-customer.client.view.html',
				controller: function($scope,$modalInstance,customer){
					$scope.customer=customer;
					$scope.ok = function () {
						if(updatecustomerform.$valid)
						$modalInstance.close($scope.customer);
					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},

				size: size,
				resolve: {
					customer: function () {
						return selectedcustomer;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

		this.remove = function(customer) {
			if (customer) {
				customer.$remove();

				for (var i in this.customers) {
					if (this.customers[i] === customer) {
						this.customers.splice(i, 1);
					}
				}
			} else {
				this.customer.$remove(function() {
				});
			}
		};



	}

	]);

customerApp.controller('CustomersCreateController', ['$scope', 'Customers','Notify',
	function($scope, Customers,Notify) {

		this.create = function() {

			var customer = new Customers({
				firstName: this.firstName,
				surName: this.surName,
				suburb:this.suburb,
				country:this.country,
				industry:this.industry,
				email:this.email,
				referred:this.referred,
				channel:this.channel,
				phone:this.phone

			});

			customer.$save(function(response) {

				Notify.sendMsg('NewCustomer',{'id':response._id});
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};





	}
]);

customerApp.controller('CustomersUpdateController', ['$scope', 'Customers',
	function($scope, Customers) {
		$scope.channelOptions=[
			{id:1,item:'facebook'},
			{id:2,item:'twitter'},
			{id:3,item:'email'}


		];
		// Update existing customer
		this.update = function(updateCustomer) {
			var customer =updateCustomer;

			customer.$update(function() {
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


	}
]);

 customerApp.directive('customerList',['Customers','Notify',function(Customers,Notify) {
	 return {
		 restrict: 'E',
		 transclude:true,
		 templateUrl:'modules/customers/views/customer-list-template.html',
		 link: function (scope,element,attrs) {
// when a new customer is added update a customer list
	Notify.getMsg('NewCustomer',function(event,data){
		console.log("here");
		scope.vm.customers = Customers.query();

	})
		 }
	 };
 }]);


/*








		// Find existing Article
		$scope.findOne = function() {
			$scope.customer = Customers.get({
				customerId: $stateParams.customerId
			});
		};


	*/
