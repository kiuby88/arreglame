'use strict';

angular.module('arreglameApp.post', [])
  .controller('PostCtrl', function ($scope) {
    $scope.mapVisible = false;


    $scope.toggleMapView = function(){
      $scope.mapVisible = !$scope.mapVisible;
    };

    $scope.addComment = function(comment){
      $scope.getPost().comments.append(comment);
    };
  })
  .directive('post', function() {

    return {
      restrict: 'E',
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    };
  })

  .directive('profileImg', function(){
    return function(scope, element, attrs){
      var url = attrs.src;

      element.addClass('img-profile');
      element.css({
        'background-image': 'url(' + url +')'
      });
    };
  })

