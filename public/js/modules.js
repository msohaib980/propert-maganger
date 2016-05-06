
var app = angular.module('propertyApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
            controller: 'homeCtrl',

        })
        .state('Clients', {
            url: '/client',
            templateUrl: '/html/Client.html',
            // controller: 'dashCtrl'
        })
    $urlRouterProvider.otherwise('/');
});
