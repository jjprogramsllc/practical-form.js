(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfCheckbox', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired:'=?'
      },
      transclude: true,
      replace: true,
      templateUrl: '/jjp/pf/checkbox.html',
      link: function(scope, element){
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.ngRequired = scope.ngRequired || false;
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
