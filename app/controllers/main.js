'use strict';


angular.module('arreglameApp.main', ['ngRoute', 'arreglameApp.navbar', 'arreglameApp.postwall', 'arreglameApp.footer'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
  }])
  .controller('MainCtrl', function ($scope) {


    var postsListInit = [
      {
        title : "Agujero en C/ Juan de Austria",
        user : "Sherlock",
        keywords : ["agujero", "calle", "peligro"],
        description : "Un gran agujero ha aparecido en la calle Juan de Austria, ayer dos vecinos míos cayeron al vacío, " +
        "por favor no se olviden de sacar a la gente de dentro antes de taparlo.",
        tags: ["agujero", "calzada", "coche"],
        latitude:"",
        longitude:"",
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
      },
      {
        title : "Agujero en C/ Juan de Austria",
        user : "Sherlock",
        keywords : ["agujero", "calle", "peligro"],
        description : "Un gran agujero ha aparecido en la calle Juan de Austria, ayer dos vecinos míos cayeron al vacío, " +
        "por favor no se olviden de sacar a la gente de dentro antes de taparlo.",
        tags: ["agujero", "calzada", "coche"],
        latitude:"",
        longitude:"",
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
      },
      {
        title : "Agujero en C/ Juan de Austria",
        user : "John Prusia",
        keywords : ["agujero", "calle", "peligro"],
        description : "Un gran agujero ha aparecido en la calle Juan de Austria, ayer dos vecinos míos cayeron al vacío, " +
        "por favor no se olviden de sacar a la gente de dentro antes de taparlo.",
        tags: ["agujero", "calzada", "coche"],
        latitude:"",
        longitude:"",
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
      }
    ];

    $scope.postList=postsListInit;

    $scope.currentView = "postwall";

    $scope.setCurrentView = function(target){
      $scope.currentView = target;
    }

  });
