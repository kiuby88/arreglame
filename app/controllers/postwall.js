'use strict';


angular.module('arreglameApp.postwall', ['arreglameApp.post'])
  .controller('PostwallCtrl', function ($scope) {

    var postInit = {
      title : "Agujero en C/ Juan de Austria",
      user : "John Prusia",
      keywords : ["agujero", "calle", "peligro"],
      description : "Un gran agujero ha aparecido en la calle Juan de Austria, ayer dos vecinos míos cayeron al vacío, " +
      "por favor no se olviden de sacar a la gente de dentro antes de taparlo.",
      tags: ["agujero", "calzada", "coche"],
      comments : [{
        userName: "María Sánchez",
        userThumbnail: "http://www.femto.it/wp-content/uploads/2014/04/default-user-avatar.png",
        text:"Pues la verdad es que es peligroso.",
        date: Date.now()
      },
        {
          userName: "Carlos Puñocerrado",
          userThumbnail: "http://www.femto.it/wp-content/uploads/2014/04/default-user-avatar.png",
          text:"Yo no creo que sea tan importante, a fin de cuentas no vivo allí.",
          date: Date.now()
        }],
      points :2
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
