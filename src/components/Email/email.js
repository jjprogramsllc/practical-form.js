(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfEmail', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('email');
  }]);
}(window.angular));
