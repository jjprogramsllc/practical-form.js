(function (pf, angular, undefined) {
  'use strict';
  pf.module.directive('pfDate', function () {
    return angular.merge({}, pf.baseDirective('date'), {
      scope: {
        datepickerOptions: '=?'
      },
    });
  });

}(window.practicalForms, window.angular));
