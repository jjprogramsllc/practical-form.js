(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfNumber', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('number', {
      max: '=?',
      min: '=?'
    });
  }])

  .directive('pfNumberMask', function() {
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
}(window.angular));
