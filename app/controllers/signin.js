'use strict';


angular.module('arreglameApp.signin', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/signin', {
      templateUrl: 'views/signin.html',
      controller: 'SigninCtrl'
    })
  }])
  .controller('SigninCtrl', function ($scope) {



  });
