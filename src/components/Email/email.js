(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfEmail', function() {
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
      templateUrl: '/jjp/pf/email.html',
      link: function(scope, element) {
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));
