(function (pf, undefined) {
  'use strict';
  pf.module.directive('pfInfo', ['$uibModal', function ($uibModal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: '@',
        pfMessage: '@',
        modalOptions: '=?'
      },
      link: function ($scope, $element) {
        $element.bind('click', function () {
          $scope.modalOptions = pf.parseModelOptions({
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
}(window.practicalForms));
