'use strict';


angular.module('arreglameApp.main', ['ngRoute', 'arreglameApp.navbar', 'arreglameApp.postwall', 'arreglameApp.footer', 'ng-mfb'])
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
        description : "Un gran agujero ha aparecido en la calle Juan de Austria, dos vecinos míos cayeron al vacío, " +
        "no se olviden de sacarlos.",
        picture : "//static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/7/12/1342109726142/hole-in-road-didsbury-man-008.jpg",
        tags: ["agujero", "calzada", "coche"],
        image: "images/socavon2.jpg",
        latitude:"36.7251368",
        longitude:"-4.4288284",
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
        title : "Contenedor quemado en C/ Alamo",
        user : "Sherlock",
        keywords : ["calle", "inhabilitado"],
        description : "Han quemado un contenedor en calle Alamos, las ratas están empezando a hacer trinchera.",
        tags: ["inhabilitado", "calzada", "plaga"],
        image: "images/contenedor.jpg",
        latitude:"36.7237506",
        longitude:"-4.4217819",

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
        title : "Pantalla en Corte Ingles",
        user : "Sherlock",
        keywords : ["propuesta", "publicidad"],
        description : "Estaría genial poner una pantalla gigante para publicidad en esa fachada tan triste." ,
        tags: ["propuesta"],
        image: "images/corteingles.jpg",
        latitude:"36.7199039",
        longitude:"-4.4277341",
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
        user : "Manolo Cara Puño",
        keywords : ["agujero", "calle", "peligro"],
        description : "Un gran agujero ha aparecido en la calle Juan de Austria, dos vecinos míos cayeron al vacío, " +
        "no se olviden de sacarlos.",
        picture : "//static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/7/12/1342109726142/hole-in-road-didsbury-man-008.jpg",
        tags: ["agujero", "calzada", "coche"],
        image: "images/socavon2.jpg",
        latitude:"36.7251368",
        longitude:"-4.4288284",
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
        title : "Contenedor quemado en C/ Alamo",
        user : "Manolo Cara Puño",
        keywords : ["calle", "inhabilitado"],
        description : "Han quemado un contenedor en calle Alamos, las ratas están empezando a hacer trinchera.",
        tags: ["inhabilitado", "calzada", "plaga"],
        image: "images/contenedor.jpg",
        latitude:"36.7237506",
        longitude:"-4.4217819",

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
        title : "Pantalla en Corte Ingles",
        user : "Manolo Cara Puño",
        keywords : ["propuesta", "publicidad"],
        description : "Estaría genial poner una pantalla gigante para publicidad en esa fachada tan triste." ,
        tags: ["propuesta"],
        image: "images/corteingles.jpg",
        latitude:"36.7199039",
        longitude:"-4.4277341",
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
