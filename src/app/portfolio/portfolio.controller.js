(function(){
	'use strict';
	angular.module('swApp')
	.controller('portfolioCtrl',portfolioCtrl);
	portfolioCtrl.$inject=['$scope','portfolioService'];

	function portfolioCtrl($scope,portfolioService){
		var vm=this;
		var	portfolio={};
		vm.manuYears=["2008","2009","2010","2011"];
		vm.companyData=["abc","abd","acd","acf"];
		$scope.yearsFilter='All';
		$scope.companyFilter='All';
		vm.tab1=true;
		vm.tab2=false;		
		vm.tab1click=tab1click;
		vm.tab2click=tab2click;

		init();

		function tab1click(){
			vm.tab1=true;
			vm.tab2=false;	
		}
		function tab2click(){
			vm.tab1=false;
			vm.tab2=true;	
		}
		/////
		function init(){
			portfolioService.getPortfolioData().then(function(data){
				portfolio=portfolioService.data.data;
				vm.portfolioData=portfolio.portfolio;
			});
		}

	}
})();