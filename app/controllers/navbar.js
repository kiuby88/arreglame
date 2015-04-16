'use strict';


angular.module('arreglameApp.navbar', ['arreglameApp.main'])
  .controller('NavbarCtrl', function ($scope) {

  })
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: 'NavbarCtrl'
    };
  });
