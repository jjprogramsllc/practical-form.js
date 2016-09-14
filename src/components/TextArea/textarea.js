(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfTextarea', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('textarea', {}, function(scope, element, attrs){
      scope.ngMaxlength = attrs.ngMaxlength || 2500;
    });
  }]);
}(window.angular));
