(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfPassword', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('password', {
      confirm: '=?'
    }, function(scope){
      scope.subform.name.$validators.password = function (modelValue) {
        return pfConfig.validation.patterns.password.test(modelValue);
      };

      if ('confirm' in scope) {
        scope.subform.name.$validators.confirm = function(modelValue) {
          if (!modelValue) {
            return false;
          }
          return modelValue === scope.confirm;
        };
      }
    });
  }]);
}(window.angular));
