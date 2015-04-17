'use strict';

var arreglameApp = angular.module('arreglameApp', [
    'ngRoute',
    'ngAnimate',
    'ng-mfb',
    'ngMap',
    'arreglameApp.main',
    'arreglameApp.signin',
    'arreglameApp.profile'
]);

arreglameApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
