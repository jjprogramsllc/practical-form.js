(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfRegex', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('pattern');
  }]);
}(window.angular));
