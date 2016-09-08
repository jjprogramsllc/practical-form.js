(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfPhone', ['pfConfig', function(pfConfig) {
    // return pf.baseDirective('phone', pfConfig);
    return angular.merge({}, pf.baseDirective('phone'), {
      link: function(scope, element) {
        pf.baseDirectiveLink(scope, element, pfConfig);

        scope.subform.name.$validators.phone = function(modelValue) {
          var pattern = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/;
          return pattern.test(modelValue);
        };
      }
    });
  }]);
}(window.practicalForms));
