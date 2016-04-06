(function(pf, undefined) {
  'use strict';
  /**
   * Text area input
   */
  pf.module.directive('pfTextarea', function() {
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
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
