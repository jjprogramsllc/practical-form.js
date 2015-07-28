(function(practicalForms, undefined) {
  practicalForms.module.directive("pfConfirm", ['$modal', function($modal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: "@",
        pfMessage: "@",
        pfConfirm: "&",
        modalOptions: "="
      },
      link: function($scope, $element, $attrs) {
        $element.bind('click', function() {
          var message = $scope.pfMessage || "Please confirm this action!";
          var title = $scope.pfTitle || "Are you sure?";

          var modalHtml = '<div class="modal-header"><h2>' + title + '</h2></div>';
          modalHtml += '<div class="modal-body">' + message + '</div>';
          modalHtml += '<div class="modal-footer">';
          modalHtml += '<button class="btn btn-primary" ng-click="Ok()">OK</button>';
          modalHtml += '<button class="btn btn-warning" ng-click="Cancel()">Cancel</button></div>';

          $scope.modalOptions = $scope.modalOptions || {};
          $scope.modalOptions.template = $scope.modalOptions.template || modalHtml;
          $scope.modalOptions.controller = $scope.modalOptions.controller || ['$scope', '$modalInstance', function($scope, $modalInstance) {
            $scope.Ok = function() {
              $modalInstance.close();
            };
            $scope.Cancel = function() {
              $modalInstance.dismiss('cancel');
            };
          }];

          $modal.open($scope.modalOptions).result.then(function() {
            $scope.pfConfirm();
          });
        });
      }
    };
  }]);
}(window.practicalForms = window.practicalForms || {}));
