'use strict';


angular.module('arreglameApp.footer', [])
  .controller('footerCtrl', function ($scope) {



  })
  .directive('footer', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/footer.html'
    };
  });
