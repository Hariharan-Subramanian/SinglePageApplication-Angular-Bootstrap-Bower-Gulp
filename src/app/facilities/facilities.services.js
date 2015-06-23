(function(){
	'use strict';
	angular.module('swApp')
	.service('facilityDataService',facilityDataService);
	facilityDataService.$inject=['dataService'];

	function facilityDataService(dataService){
		var service={
			data:'',
			getfacilityDataService:getfacilityDataService
		}
		return service;
		function getfacilityDataService(){
			return dataService.getfacilityService().then(function(data){
				service.data=data;
			});
		}

	}

})();

