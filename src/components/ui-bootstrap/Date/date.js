(function (pf, angular, undefined) {
  'use strict';
  pf.module.directive('pfDate', ['pfConfig', function (pfConfig) {
    return angular.merge({}, pf.baseDirective('date', pfConfig), {
      scope: {
        datepickerOptions: '=?'
      },
    });
  }]);

}(window.practicalForms, window.angular));
