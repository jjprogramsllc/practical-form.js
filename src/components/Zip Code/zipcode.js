(function(practicalForms, undefined) {
  'use strict';
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive('pfZip', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngTrim: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/zipcode.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
