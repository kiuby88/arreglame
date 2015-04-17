'use strict';


angular.module('arreglameApp.post', [])
  .controller('PostCtrl', function ($scope) {
    $scope.mapVisible = false;


    $scope.toggleMapView = function(){
      $scope.mapVisible = !$scope.mapVisible;
    }



  })
  .directive('post', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/post.html',
      controller: 'PostCtrl',
      scope: { post: "=" }
    };
  })

