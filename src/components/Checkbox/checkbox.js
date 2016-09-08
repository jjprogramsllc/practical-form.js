(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfCheckbox', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('checkbox');
  }]);
}(window.angular));
