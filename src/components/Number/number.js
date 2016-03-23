(function(practicalForms, undefined) {
  'use strict';
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive('pfNumber', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/number.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
