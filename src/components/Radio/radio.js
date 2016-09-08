(function (pf, angular, undefined) {
  'use strict';
  pf.module.directive('pfRadio', ['pfConfig', function (pfConfig) {
    return angular.merge({}, pf.baseDirective('radio', pfConfig), {
      scope: {
        value: '@',
      },
      link: function (scope, element, attrs) {
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.ngRequired = pf.valOrDefault(scope.ngRequired, false);
        scope.check = scope.ngRequired;
        scope.name = attrs.ngModel;
      }
    });
  }]);

}(window.practicalForms, window.angular));
