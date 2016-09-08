(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfDate', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('date', {datepickerOptions: '=?'});
  }]);
}(window.angular));
