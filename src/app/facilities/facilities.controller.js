(function(){
	'use strict';
	angular.module('swApp')
	.controller('facilityCtrl',facilityCtrl);

	facilityCtrl.$inject=['$scope','facilityDataService']

	function facilityCtrl($scope,facilityDataService){
		var vm=this;
		init();
		var facilitydata={};
		/////
		
		function init(){
			facilityDataService.getfacilityDataService().then(function(data){
					facilitydata=facilityDataService.data.data;
					vm.facilityData=facilitydata.facility;

			})
		}

	}
})();