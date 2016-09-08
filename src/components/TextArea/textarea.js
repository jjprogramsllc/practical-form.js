(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfTextarea', ['pfConfig', function(pfConfig) {
    return pf.baseDirective('textarea', pfConfig);
  }]);
}(window.practicalForms));
