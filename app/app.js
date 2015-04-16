'use strict';


var arreglameApp = angular.module('arreglameApp', [
    'ngRoute',
    'ngAnimate',
    'arreglameApp.main',
    'arreglameApp.signin',
]);

arreglameApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
