(function(pf, angular, undefined) {
  'use strict';
  pf.module.directive('pfPassword', ['pfConfig', function(pfConfig) {
    return angular.merge({
      scope: {
        confirm: '=?'
      }
    }, pf.baseDirective('password'), {
      link: function(scope, element) {
        pf.baseDirectiveLink(scope, element, pfConfig);

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
      }
    });
  }]);

}(window.practicalForms, window.angular));
