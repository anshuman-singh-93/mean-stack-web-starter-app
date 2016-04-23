//Customers service used to communicate Customers REST endpoints

'use strict';
angular
	.module('customers')
	.factory('Customers',['$resource', function ($resource) {
		return $resource('/customers/:customerId', {
			customerId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
	])
	.factory('Notify',['$rootScope',function ($rootScope) {
		var notify={};
		notify.sendMsg=function(msg,data){
			data=data || {};
			$rootScope.$emit(msg,data);
			console.log("sent");
		};

		notify.getMsg=function(msg,func,scope){
			var unbind=$rootScope.$on(msg,func);
			if(scope)
			{
				scope.$on('destroy',unbind);
			}
		};
		return notify;
	}
	]);






/*

(function () {
  'use strict';

  angular
    .module('customers')
    .factory('Customers',['$resource', Customers])
	.factory('Notify',['$rootScope',Notify]);


  function Customers($resource) {
    return $resource('/customers/:customerId', {
      customerId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }


	function Notify($rootScope) {
		var notify={};
		notify.sendMsg=function(msg,data){
			data=data || {};
			$rootScope.$emit(msg,data);
			console.log("sent");
		};

		notify.getMsg=function(msg,func,scope){
			var unbind=$rootScope.$on(msg,func);
			if(scope)
			{
				scope.$on('destroy',unbind);
			}
		};
		return notify;
	}


})();


	*/
