(function(pf, undefined) {
  'use strict';

  pf.module.directive('pfConfirm', [
    '$uibModal',
    function($uibModal) {
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
            $scope.modalOptions = $scope.modalOptions || {};
            $scope.modalOptions.templateUrl = $scope.modalOptions.templateUrl || '/jjp/pf/confirm.html';
            $scope.modalOptions.controller = $scope.modalOptions.controller || 'pfModalCtrl';
            $scope.modalOptions.resolve = {
              params: {
                title: $scope.pfTitle || 'Are you sure?',
                message: $scope.pfMessage || 'Please confirm this action!'
              }
            };

            $uibModal.open($scope.modalOptions).result.then(function() {
              $scope.pfConfirm();
            });
          });
        }
      };
    }
  ]);
}(window.practicalForms = window.practicalForms || {}));
