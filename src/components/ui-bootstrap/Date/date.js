(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfDate', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        format: '@?',
        minDate: '=?',
        datepickerOptions: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/date.html',
      link: function(scope, element) {
        if (typeof scope.minDate !== 'undefined') {
          scope.datepickerOptions.minDate = scope.minDate;
        }
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
