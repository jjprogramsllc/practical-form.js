(function (pf, undefined) {
  'use strict';
  pf.module.directive('pfCheckbox', ['pfConfig', function (pfConfig) {
    return pf.baseDirective('checkbox', pfConfig);
  }]);

}(window.practicalForms));
