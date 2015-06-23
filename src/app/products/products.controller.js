(function() {
    'use strict';
    angular.module('swApp').
    controller('productCtrl', productCtrl);
    productCtrl.$inject = ['$scope', 'productService']

    function productCtrl($scope, productService) {
        var vm = this;
        var allProducts = {};
        $scope.singleProductData = {
            "title": "Product 1",
            "imgsrc": "/assets/images/lazyfonz1.png",
            "detail": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.scrambled it to make a type specimen book."
        };
        $scope.$on('selectedproductdata', function(evt, value) {
            $scope.singleProductData = value;
            console.log( $scope.singleProductData)
        });
        initproduct();

        //////

        function initproduct() {
            productService.getProductData().then(function(data) {
                allProducts = productService.data.data;
                vm.allProductData = allProducts.allproducts;
            });
        }
    }
})();
