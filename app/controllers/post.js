'use strict';


angular.module('arreglameApp.post', [])
  .controller('PostCtrl', function ($scope) {



  })
  .directive('post', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/post.html',
      controller: 'PostCtrl',
      scope: { post: "=" }
    };
  });
