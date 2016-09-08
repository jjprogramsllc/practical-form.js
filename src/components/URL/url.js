(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfUrl', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('url');
  }]);
}(window.angular));
