(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfText', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('text', {},  function(scope, element, attrs){
      scope.ngMaxlength = attrs.ngMaxlength || scope.ngMaxlength;
      scope.ngMinlength = attrs.ngMaxlength || scope.ngMinlength;
    });
  }]);
}(window.angular));
