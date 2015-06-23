(function() {
    'use strict';
    angular.module('swApp')
        .directive('swFooter', function() {
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/footer.html'
            };
        })
        .directive('swHeader', function() {
            // Runs during compile
             var headerCtrl = function($location) {
                var vm=this;
                vm.isActive = function(viewLocation) {
                    var active = (viewLocation === $location.path());                    
                    return active;
                };
            }
            return {
                restrict: 'E',
                templateUrl: 'app/components/navbar/header.html',
                link: function($scope, elem, attr) {
                    elem.find('.mobilemenu').on('click', function() {
                        $(this).next().toggleClass('displayblock');
                    });
                },
                controller: headerCtrl,
                controllerAs: 'vm',
                bindToController: true
            };
           
        });


})();
