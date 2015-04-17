'use strict';


angular.module('arreglameApp.profile', ['ngRoute',
  'arreglameApp.navbar',
  'arreglameApp.footer',
  'arreglameApp.post'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    })
  }])


  .filter('byPostUser', function () {
    return function (items, username) {
      var filtered = [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.user==username) {
          filtered.push(item);
        }
      }
      return filtered;
    };
  })

  .controller('ProfileCtrl', function ($scope) {






















    $scope.modalNewMessageId = 'modalNewMessage';


    $scope.buttons = [{
      label: 'Enviar Mensaje',
      icon: 'glyphicon glyphicon-pencil',
      modal: $scope.modalNewMessageId
    }, {
      label: 'Recibidos',
      icon: 'glyphicon glyphicon-download-alt',
      modal: ''
    }, {
      label: 'Eliminados',
      icon: 'glyphicon glyphicon-trash',
      modal: ''
    }];


    $scope.userName = 'Sherlock';
    $scope.surname = 'Boqueron';
    $scope.signUpDate = '16.4.2015';
    $scope.lastSignIn = 'Yesterday';
    $scope.city = 'Málaga';
    $scope.description = 'A long description about me.';
    $scope.profileImage = 'http://www.rlsandbox.com/img/profile.jpg';


    $scope.numIncidents = 125;
    $scope.acceptedIncidents = 71;
    $scope.refusedIncidents = 29;
    $scope.processingIncidents = 25;

    $scope.webSite = 'elmashumilde.com';


    $scope.acceptedIncidentsPerCent = function () {
      return $scope.acceptedIncidents * 100 / $scope.numIncidents;
    }

    $scope.refusedIncidentsPerCent = function () {
      return $scope.refusedIncidents * 100 / $scope.numIncidents;
    }

    $scope.processingIncidentsPerCent = function () {
      return $scope.processingIncidents * 100 / $scope.numIncidents;
    }


  })

  .directive('profile', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl'
    };
  });
