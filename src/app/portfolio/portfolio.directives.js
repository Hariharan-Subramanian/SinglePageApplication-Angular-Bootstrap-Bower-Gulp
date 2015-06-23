(function() {
    'use strict';
    angular.module('swApp')
        .directive('portFolioTable', function() {
            return {
                restrict: 'AE',
                scope: {
                    data: '=',
                    yearfilter:'=',
                    companyfilter:'='
                },
                templateUrl: '/app/portfolio/portfoliotable.html',
                controller: function($scope) {
                    $scope.$watch(function(scope) {
                            return scope.data
                        },
                        function(newValue, oldValue) {
                            console.log($scope.data)
                            $scope.customFilter = function(datae) {
                                if (datae.companyname === $scope.data[0].companyname) {
                                    return true;
                                } else {
                                    return false;
                                }
                            };
                        });

                }

            }
        })
})();
