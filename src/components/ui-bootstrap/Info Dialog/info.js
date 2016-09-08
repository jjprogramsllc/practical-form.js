(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfInfo', ['pfConfig', '$uibModal', function(pfConfig, $uibModal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: '@',
        pfMessage: '@',
        modalOptions: '=?'
      },
      link: function($scope, $element) {
        $element.bind('click', function() {
          $scope.modalOptions = pfConfig.parseModelOptions({
            templateUrl: '/jjp/pf/info.html',
            resolve: {
              params: {
                title: $scope.pfTitle || 'Information',
                message: $scope.pfMessage || 'Here is some more info for you!'
              }
            }
          }, $scope.modalOptions);
          $uibModal.open($scope.modalOptions);
        });
      }
    };
  }]);
}(window.angular));
