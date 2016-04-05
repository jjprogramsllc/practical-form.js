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
        ngRequired: '=?',
        max: '=?',
        min: '=?'
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

  practicalForms.module.directive('pfNumberMask', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: false,

      link: function(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function(inputValue) {
          return inputValue;
        });

        ctrl.$parsers.push(function(value) {
          var p = value || 0;
          if (typeof p !== 'number') {
            if (value.length === 0) {
              value = 0;
            } else {
              p = parseFloat(value);
            }
            if (p !== ctrl.$viewValue) {
              ctrl.$setViewValue(p);
              ctrl.$render();
            }
          }
          return p;
        });
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
