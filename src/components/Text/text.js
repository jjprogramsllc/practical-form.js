(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfText', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('text');
  }]);
}(window.angular));
