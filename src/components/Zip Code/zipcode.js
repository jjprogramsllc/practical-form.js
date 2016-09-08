(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfZip', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('zipcode', {}, function(scope){
      scope.subform.name.$validators.zipcode = function (modelValue) {
        return pfConfig.validation.patterns.zipcode.test(modelValue);
      };
    });
  }]);
}(window.angular));
