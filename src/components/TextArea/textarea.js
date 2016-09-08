(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfTextarea', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('textarea');
  }]);
}(window.angular));
