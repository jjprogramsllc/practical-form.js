(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfPhone', ['pfConfig', function(pfConfig) {
    // return pf.baseDirective('phone', pfConfig);
    return angular.merge({}, pf.baseDirective('phone'), {
      link: function(scope, element) {
        pf.baseDirectiveLink(scope, element, pfConfig);

        scope.subform.name.$validators.phone = function(modelValue) {
          return pfConfig.validation.patterns.phone.test(modelValue);
        };
      }
    });
  }]);
}(window.practicalForms));
