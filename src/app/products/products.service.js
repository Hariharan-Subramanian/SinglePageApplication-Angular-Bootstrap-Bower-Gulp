(function() {
    'use strict';
    angular.module('swApp')
        .service('productService', productService);
    productService.$inject = ['dataService'];

    function productService(dataService) {
    	var service={
    		data:'',
    		getProductData:getProductData
    	};
    	return service;

    	function getProductData(){
    		return dataService.getTopProductsData().then(function(data){
    			service.data=data;
    		});
    	}
    }
})();
