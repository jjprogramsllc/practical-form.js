(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  /*
   * Single Picture Uploader
   * Provides a preview of the image before uploading
   *
   */
  .factory('jjp.FileObject', ['$q', function($q) {
    var onLoad = function(reader, deferred) {
      return function() {
        deferred.resolve(reader.result);
      };
    };

    var onError = function(reader, deferred) {
      return function() {
        deferred.reject(reader.result);
      };
    };

    var onProgress = function(reader, deferred) {
      return function(event) {
        deferred.notify(event);
      };
    };

    var FileObject = {
      ReadImage: function(file) {
        var deferred = $q.defer();

        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred);
        reader.onerror = onError(reader, deferred);
        reader.onprogress = onProgress(reader, deferred);

        reader.readAsDataURL(file);

        return deferred.promise;
      }
    };

    return FileObject;
  }])

  .directive('pfPictureUploader', ['pfConfig', function(pfConfig) {
    var directive = pfConfig.baseDirective('picture', {
      preview: '=?',
      url: '@?',
      result: '=?',
      status: '=?',
      maxSize: '=?',
    }, function(scope, element) {
      angular.element(element[0].querySelector('.file-selector')).bind('click', function() {
        element[0].querySelector('input').click();
      });
      angular.element(element[0].querySelector('input')).bind('change', function(e) {
        if (typeof((e.srcElement || e.target).files[0]) !== 'undefined') {
          scope.$apply(function() {
            scope.ngModel = (e.srcElement || e.target).files[0];
            scope.Select();
          });
        }
      });
    });
    directive.controller = ['$scope', '$http', 'jjp.FileObject', function($scope, $http, FileObject) {
      $scope.Select = function() {
        $scope.status = 1;
        if ($scope.ngModel.size > $scope.size) {
          $scope.status = -10;
          $scope.result = 'Image is too Big!';
          return;
        }
        FileObject.ReadImage($scope.ngModel).then(function(result) {
          $scope.preview = result;
          $scope.status = 2;
        }, function(error) {
          $scope.status = -1;
          $scope.result = error;
        }, function(event) {
          $scope.load = event;
        });
      };

      $scope.Upload = function() {
        $scope.status = 3;
        var fd = new FormData();
        fd.append('file', $scope.ngModel);
        $http.post($scope.url, fd, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        }).success(function(data) {
          $scope.status = 4;
          $scope.result = data;
        }).error(function(error) {
          $scope.status = -1;
          $scope.result = error;
        });
      };

      $scope.Remove = function() {
        $scope.ngModel = null;
        $scope.preview = null;
        $scope.status = 0;
      };

      $scope.CanUpload = function() {
        var urlPattern = new RegExp('^(ht|f)tp(s?)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?([\d\w\.\/\%\+\-\=\&amp;\?\:\\\&quot;\'\,\|\~\;]*)$');
        return urlPattern.test($scope.url);
      };

      // maxSize or 3MB
      $scope.size = $scope.maxSize || 3000000;
      $scope.ngModel = {};
      $scope.status = 0;
      $scope.result = {};
      $scope.showPreview = 0;
      $scope.showUpload = $scope.CanUpload();
    }];
    return directive;
  }]);
}(window.angular));
