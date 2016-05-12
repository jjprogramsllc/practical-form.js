(function (pf, undefined) {
  'use strict';
  pf.module.directive('pfConfirm', ['$uibModal', function ($uibModal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: '@',
        pfMessage: '@',
        pfConfirm: '&',
        modalOptions: '=?'
      },
      link: function ($scope, $element) {
        $element.bind('click', function () {
          $scope.modalOptions = pf.parseModelOptions({
            templateUrl: '/jjp/pf/confirm.html',
            resolve: {
              params: {
                title: $scope.pfTitle || 'Are you sure?',
                message: $scope.pfMessage || 'Please confirm this action!',
                btnOk: 'btn-primary',
                btnCancel: 'btn-warning',
              }
            }
          }, $scope.modalOptions);
          $uibModal.open($scope.modalOptions).result.then(function () {
            $scope.pfConfirm();
          });
        });
      }
    };
  }]);
}(window.practicalForms));
