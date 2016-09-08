
(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfRadio', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('radio', {value: '@'} , function(scope, element, attrs){
      scope.check = scope.ngRequired;
      scope.name = attrs.ngModel;
      scope.ngRequired = pfConfig.valOrDefault(scope.ngRequired, false);
    });
  }]);
}(window.angular));
