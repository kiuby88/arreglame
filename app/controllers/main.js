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
        points :100
      },

      {
        title : "Barcas en el parqued e Huelin",
        user : "Manolo Cara Puño",
        keywords : ["calle", "atracción", "mejora"],
        description : "Se podría poner un punto de alquiler de barcas en el lago a modo de atracción.",
        tags: ["inhabilitado", "calzada", "plaga"],
        image: "images/huelin.jpg",
        latitude:"36.703528",
        longitude:"-4.4345141",
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
        points :539
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
        points :21766
      },


      {
        title : "Carril bici con obstaculos",
        user : "Sherlock",
        keywords : ["defecto", "calle", "peligro"],
        description : "Obstaculo en mitad de un carrir bici. Peligroso si tu bici no tiene cohete.",
        picture : "//static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/7/12/1342109726142/hole-in-road-didsbury-man-008.jpg",
        tags: ["agujero", "calzada", "coche"],
        image: "images/bici.jpg",
        latitude:"36.7120604",
        longitude:"-4.4246006",
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
        points :3567
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
        points :7
      },
      {
        title : "Parking en el PTA",
        user : "Lucía Romero",
        keywords : ["propuesta", "mejora", "incidencia"],
        description : "Es necesario ampliar los espacios para estacionar los vehículos en el PTA." ,
        tags: ["propuesta"],
        image: "images/pta.jpg",
        latitude:"-4.5533193",
        longitude: "-4.5533193",
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
        points :3001
      }















    ];

    $scope.postList=postsListInit;

    $scope.currentView = "postwall";

    $scope.setCurrentView = function(target){
      $scope.currentView = target;
    }

  });
