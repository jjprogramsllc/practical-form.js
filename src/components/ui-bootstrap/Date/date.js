(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfDate', function() {
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
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
