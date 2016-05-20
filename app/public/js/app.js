var app = angular.module('app.dictionary', ['ngRoute']);

app.config(function ($routeProvider) {
    
    $routeProvider
        
        .when('/', {
            templateUrl: 'view/index.html',
            controller: 'dictionaryCtrl'
        })

        .when('/about', {
            templateUrl: 'view/about.html',
            controller: 'dictionaryCtrl'
        })
});
