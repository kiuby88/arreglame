'use strict';


angular.module('arreglameApp.footer', [])

  .directive('postwall', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/footer.html'
    };
  });
