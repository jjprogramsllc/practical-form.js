(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfUrl', ['pfConfig', function(pfConfig) {
    return pf.baseDirective('url', pfConfig);
  }]);
}(window.practicalForms));
