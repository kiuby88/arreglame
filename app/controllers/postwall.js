'use strict';


angular.module('arreglameApp.postwall', ['arreglameApp.post'])
  .controller('PostwallCtrl', function ($scope) {

    var postInit = {
      title : "Agujero en C/ Juan de Austria",
      user : "John Prusia",
      keywords : ["agujero", "calle", "peligro"],
      description : "Un gran agujero ha aparecido en la calle Juan de Austria",
      comments : [{
        userName: "María Sánchez",
        userThumbnail: "http://www.femto.it/wp-content/uploads/2014/04/default-user-avatar.png",
        text:"Pues la verdad es que es peligroso.",
        date: Date.now()
      },
        {
          userName: "María Sánchez",
          userThumbnail: "http://www.femto.it/wp-content/uploads/2014/04/default-user-avatar.png",
          text:"Pues la verdad es que no es muy peligroso.",
          date: Date.now()
        }],
      points :0
    };

    $scope.posts = [postInit];

  })
  .directive('postwall', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/postwall.html',
      controller: 'PostwallCtrl'
    };
  });
