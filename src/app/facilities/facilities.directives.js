(function() {
    'use strict';
    angular.module('swApp')
        .directive('facilityProduct',['$modal', function($modal) {
            return {
                restrict: 'EA',
                scope: {
                    data: '='
                },
                templateUrl: '/app/facilities/facilitylist.html',
                controllerAs: 'vm',
                controller: function($scope,$modal) {
                    var vm = this;
                    vm.viewprofileClick = viewprofileClick;

                    function viewprofileClick(thisobj) {
                        $scope.selectedproductdata = thisobj;
                        vm.modalInstance = $modal.open({
                            templateUrl: '/app/facilities/facilitiesfull.html',
                            controller: facilityHelpCtrl,
                            scope: $scope,
                            size:'lg'
                        });
                        // $scope.$emit('selectedproductdata', thisobjdata);                     
                    }
                }

            }

        }])

    function facilityHelpCtrl($scope, $modalInstance) {

        $scope.timecardHelpModalClose = function() {
            $modalInstance.dismiss('cancel');
        }
    }
})();
