'use strict';


angular.module('arreglameApp.postwall', ['arreglameApp.post', 'ng-mfb', 'angularFileUpload'])
  .controller('PostwallCtrl', function ($scope, $upload) {

    $scope.newPost = {
      category: ''
    };

    $scope.clearForm = function(){
      $scope.newPost = {
        category: ''
      }
    };

    $scope.addNewPost = function(){
      $scope.postList.push($scope.newPost);
    }

    /* File uploads */
    $scope.$watch('files', function () {
      $scope.upload($scope.files);
    });
    $scope.upload = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          $upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            fields: {
              'username': $scope.username
            },
            file: file
          }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' +
            evt.config.file.name);
          }).success(function (data, status, headers, config) {
            console.log('file ' + config.file.name + 'uploaded. Response: ' +
            JSON.stringify(data));
          });
        }
      }
    };
  })

  .directive('postwall', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/postwall.html',
      controller: 'PostwallCtrl'
    };
  })
  .directive('resetOnDismiss', function(){
      return function($scope, $element) {
        $element.bind('clickoutside', function () {
          $scope.resetNewPostForm();
          console.log("JANDER");
        });
      }
  });
