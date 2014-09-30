angular.module('PracticalForms').directive("pfConfirmDialog", ['$modal', function($modal){
  return {
    restrict: 'A',
    scope: {
      pfConfirm: "&",
      item: "="
    },
    link : function ($scope, $element, $attrs) {
      $element.bind('click', function () {

        var message = $attrs.pfModalMessage || "Are you sure ?";
        var modalHtml = '<div class="modal-header"><h1>'+$attrs.pfModalTitle+'</h1></div>';
        modalHtml += '<div class="modal-body">' + message + '</div>';
        modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>';

        var modalInstance = $modal.open({
          template: modalHtml,
          controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
            $scope.ok = function() { $modalInstance.close(); };
            $scope.cancel = function() { $modalInstance.dismiss('cancel'); };
          }],
        });

        modalInstance.result.then(function () {
            $scope.pfConfirm({ item: $scope.item });
        }, function () {
            //Modal dismissed
        });
      });
    }
  };
}]);
