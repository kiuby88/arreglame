'use strict';


angular.module('arreglameApp.navbar', ['arreglameApp.main'])
  .controller('NavbarCtrl', function ($scope) {

    var position={
      latitude:"36.7251368",
      longitude: "-4.4288284"
    }
    $scope.centerPosition=position;

  })
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: 'NavbarCtrl'
    };
  });
