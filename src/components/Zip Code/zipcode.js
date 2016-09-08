(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfZip', ['pfConfig', function(pfConfig) {
    return angular.merge({ }, pf.baseDirective('zipcode', pfConfig), {
      link: function (scope, element) {
        pf.baseDirectiveLink(scope, element, pfConfig);

        scope.subform.name.$validators.zipcode = function (modelValue) {
          var pattern = /^\d{5}(-\d{4})?$/;
          return pattern.test(modelValue);
        };
      }
    });
  }]);

}(window.practicalForms));
