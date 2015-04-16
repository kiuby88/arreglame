'use strict';


angular.module('arreglameApp.signin', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/signin.html',
      controller: 'SigninCtrl'
    })
  }])
  .controller('SigninCtrl', function ($scope) {



  });
