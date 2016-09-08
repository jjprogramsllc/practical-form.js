(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfPhone', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('phone', {}, function(scope) {
      scope.subform.name.$validators.phone = function(modelValue) {
        return pfConfig.validation.patterns.phone.test(modelValue);
      };
    });
  }]);
}(window.angular));
