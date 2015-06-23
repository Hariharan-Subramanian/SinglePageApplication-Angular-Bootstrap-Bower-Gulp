(function() {
    'use strict';
    angular.module('swApp')
        .service('mainService',mainService);
    mainService.$inject = ['dataService'];

    function mainService(dataService) {
        var service = {
            data: '',
            getTopProductdata: getTopProductdata
        };
        return service;

        function getTopProductdata() {
            return dataService.getTopProductsData().then(function(data) {
                service.data = data;
            });
       }
    }
})();
