/*
 * Single Picture Uploader
 * Provides a preview of the image before uploading
 *
 */
module.factory("jjp.FileObject", ["$q", "$log",function($q, $log){
  var FileObject = {
    ReadImage : function(file, scope){
      var deferred = $q.defer();

      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred);
      reader.onerror = onError(reader, deferred);
      reader.onprogress = onProgress(reader, deferred);

      reader.readAsDataURL(file);

      return deferred.promise;
    }
  };

  var onLoad = function(reader, deferred) {
    return function () {
      deferred.resolve(reader.result);
    };
  };

  var onError = function (reader, deferred) {
    return function () {
        deferred.reject(reader.result);
    };
  };

  var onProgress = function(reader, deferred) {
    return function (event) {
      deferred.notify(event);
    };
  };

  return FileObject;
}]);

module.directive("pfPictureUploader", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      preview : '=',
      upload: '@',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/picture.html',

    link: function(scope,el){
      angular.element(el[0].querySelector('.file-selector')).bind("click", function(e){
        el[0].querySelector('input').click();
      });
      el.bind("change", function(e){
        scope.ngModel = (e.srcElement || e.target).files[0];
        scope.Select();
      });
    },

    controller: ['$scope','$http','jjp.FileObject', function($scope, $http, FileObject){
      $scope.status = "";
      $scope.showPreview = 0;
      // $scope.showUpload = (/^(ht|f)tp(s?)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?([\d\w\.\/\%\+\-\=\&amp;\?\:\\\&quot;\'\,\|\~\;]*)$/)
      //                   .test($scope.upload);
      $scope.showUpload = true;


      $scope.Select = function(){
        FileObject.ReadImage($scope.ngModel, $scope).then(function(result) {
          $scope.preview = result;
          $scope.showPreview = 2;
        },function(error){
          $scope.showPreview = 3;
          console.log(error);
        },function(event){
          $scope.showPreview = 1;
          $scope.load = event;
        });
      };

      $scope.Upload = function(){
        console.log($scope.upload);
        $scope.status = "Uploading!";
        var fd = new FormData();
        fd.append('file', $scope.ngModel);
        $http.post($scope.upload, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
          $scope.status = "Saved!";
          console.log("Success", data);
        }).error(function(error){
          $scope.status = "Error!";
          console.log(error);
        });
      };

      $scope.Remove = function(){
        $scope.ngModel = null;
        $scope.preview = null;
        $scope.showPreview = 0;
      };


    }]
  };
});
