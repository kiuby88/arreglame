'use strict';


angular.module('arreglameApp.main', ['ngRoute', 'arreglameApp.navbar', 'arreglameApp.postwall', 'arreglameApp.footer'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
  }])
  .controller('MainCtrl', function ($scope) {



  });
