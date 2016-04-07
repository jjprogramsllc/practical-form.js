(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfPhone', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/phone.html',
      link: function(scope, element) {
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));
