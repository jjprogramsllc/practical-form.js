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
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      reader.onprogress = onProgress(reader, scope);

      reader.readAsDataURL(file);

      return deferred.promise;
    }
  };

  var onLoad = function(reader, deferred, scope) {
    return function () {
      deferred.resolve(reader.result);
    };
  };

  var onError = function (reader, deferred, scope) {
    return function () {
        deferred.reject(reader.result);
    };
  };

  var onProgress = function(reader, scope) {
    return function (event) {
      scope.$broadcast("fileProgress", {
          total: event.total,
          loaded: event.loaded
      });
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
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/picture.html',

    link: function($scope,el){
      el.bind("change", function(e){
        $scope.filexxx = (e.srcElement || e.target).files[0];
      });

    },

    controller: ['$scope','jjp.FileObject', function($scope, FileObject){
      $scope.upload = function(){
        console.log("uploading:", $scope.filexxx);
        FileObject.ReadImage($scope.filexxx, $scope).then(function(result) {
          $scope.imageSrc = result;
        },function(error){
          console.log(error);
        });
      };
    }]
  };
});
