(function(){
	'use strict';
	angular.module('swApp')
	.service('portfolioService',portfolioService);
	portfolioService.$inject=['dataService'];
	function portfolioService(dataService){
		var service={
			data:'',
			getPortfolioData:getPortfolioData
		}
		return service;

		function getPortfolioData(){
			return dataService.getPortdataService().then(function(data){
				service.data=data;
			});
		}
	}
})();