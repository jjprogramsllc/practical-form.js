(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfConfirm', ['pfConfig', '$uibModal', function(pfConfig, $uibModal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: '@',
        pfMessage: '@',
        pfConfirm: '&',
        modalOptions: '=?'
      },
      link: function($scope, $element) {
        $element.bind('click', function() {
          $scope.modalOptions = pfConfig.parseModelOptions({
            templateUrl: '/jjp/pf/confirm.html',
            resolve: {
              params: {
                title: $scope.pfTitle || 'Are you sure?',
                message: $scope.pfMessage || 'Please confirm this action!'
              }
            }
          }, $scope.modalOptions);
          $uibModal.open($scope.modalOptions).result.then(function() {
            $scope.pfConfirm();
          });
        });
      }
    };
  }]);
}(window.angular));
