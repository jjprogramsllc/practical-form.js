(function (pf, undefined) {
  'use strict';
  pf.module.directive('pfRegex', ['pfConfig', function (pfConfig) {
    return pf.baseDirective('pattern', pfConfig);
  }]);

}(window.practicalForms));
