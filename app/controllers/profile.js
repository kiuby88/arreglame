'use strict';


angular.module('arreglameApp.profile', ['ngRoute', 'arreglameApp.navbar', 'arreglameApp.footer'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
  }])
  .controller('ProfileCtrl', function ($scope) {



  })

  .directive('profile', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    };
  });
