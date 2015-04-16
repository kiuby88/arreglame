'use strict';


angular.module('arreglameApp.postwall', ['arreglameApp.post'])
  .controller('PostwallCtrl', function ($scope) {



  })
  .directive('postwall', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/postwall.html',
      controller: 'PostwallCtrl'
    };
  });
