(function() {
    'use strict';
    angular
        .module('swApp')
        .service('dataService', dataService);

    function dataService($http) {
        this.getTopProductsData = function() {
            return $http.get('./data/topproducts.json');
        };
        this.getPortdataService=function(){
            return $http.get('./data/portfolio.json');
        };
       this.getfacilityService=function(){
            return $http.get('./data/facilities.json');
       }
    }
    dataService.$inject = ['$http'];
})();
