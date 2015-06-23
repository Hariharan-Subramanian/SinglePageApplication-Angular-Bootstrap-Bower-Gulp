(function() {
    'use strict';
    angular.module('swApp', ['slick','ngAnimate', 'ngCookies','ngMap', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/main/main.html',
                    controller: 'MainCtrl'
                }).state('productslist', {
                    url: '/productslist',
                    templateUrl: '/app/products/products.html',
                    controller: 'productCtrl'
                }).state('contactus', {
                    url: '/contactus',
                    templateUrl: '/app/contactus/contactus.html',
                    controller: 'contactusCtrl'
                }).state('portfolio',{
                    url:'/portfolio',
                    templateUrl:'/app/portfolio/portfolio.html',
                    controller:'portfolioCtrl'
                }).state('ourfacilities',{
                    url:'/ourfacilities',
                    templateUrl:'/app/facilities/facilities.html',
                    controller:'facilityCtrl'
                })           
            $urlRouterProvider.otherwise('/');
        })
})();