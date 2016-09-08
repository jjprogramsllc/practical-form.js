(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfEmail', ['pfConfig', function(pfConfig) {
    return pf.baseDirective('email', pfConfig);
  }]);
}(window.practicalForms));
