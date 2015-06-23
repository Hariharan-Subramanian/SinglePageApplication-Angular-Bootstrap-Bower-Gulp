(function() {
    'use strict';
    angular.module('swApp')
        .directive('swProduct', ['$timeout', function($timeout) {
            return {
                restrict: 'E',
                scope: {
                    data: '=',
                    singleview: '='
                },
                templateUrl: '/app/main/swproducts.html',
                controllerAs: 'vm',
                controller: function($scope) {
                    var vm = this;
                    vm.viewprofileClick = viewprofileClick;

                    function viewprofileClick(thisobj) {
                        var thisobjdata=thisobj;
                        $scope.$emit('selectedproductdata', thisobjdata);                     
                        if (!$scope.singleview) {
                                window.location = '#/productslist';
                        }

                    }
                }
            };
        }])
})();
