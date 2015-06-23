(function() {

    'use strict';

    angular.module('swApp')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, mainService) {
        var vm = this;
        var topProduct = {};

        initmain();
        var options = {
            nextButton: false,
            prevButton: false,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 3000,
            preloader: true
        };
        var mySequence = $("#sequence").sequence(options).data("sequence");
        ///
        function initmain() {
            mainService.getTopProductdata().then(function(data) {
                topProduct = mainService.data.data;
                vm.topProdList = topProduct.topproducts;

            });
        }

    }
    MainCtrl.$inject = ['$scope', 'mainService'];
})();
