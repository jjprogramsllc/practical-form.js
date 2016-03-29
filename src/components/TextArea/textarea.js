(function(practicalForms, undefined) {
  'use strict';
  /**
   * Text area input
   */
  practicalForms.module.directive('pfTextarea', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngMinlength: '=?',
        ngMaxlength: '=?',
        ngPattern: '@?',
        ngTrim: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/textarea.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
