(function(practicalForms, undefined) {
  practicalForms.module.directive("pfConfirm", ['$modal', function($modal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: "@",
        pfMessage: "@",
        pfConfirm: "&",
      },
      link: function($scope, $element, $attrs) {
        $element.bind('click', function() {
          var message = $scope.pfMessage || "Are you sure ?";
          var title = $scope.pfTitle || "Warning!";
          var modalHtml = '<div class="modal-header"><h1>' + title + '</h1></div>';
          modalHtml += '<div class="modal-body">' + message + '</div>';
          modalHtml += '<div class="modal-footer">';
          modalHtml += '<button class="btn btn-primary" ng-click="Ok()">OK</button>';
          modalHtml += '<button class="btn btn-warning" ng-click="Cancel()">Cancel</button></div>';

          var modalInstance = $modal.open({
            template: modalHtml,
            controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
              $scope.Ok = function() {
                $modalInstance.close();
              };
              $scope.Cancel = function() {
                $modalInstance.dismiss('cancel');
              };
            }],
          });
          modalInstance.result.then(function() {
            $scope.pfConfirm();
          }, function() {
            //Modal dismissed
          });
        });
      }
    };
  }]);
}(window.practicalForms = window.practicalForms || {}));
