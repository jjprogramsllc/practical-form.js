(function(pf, angular, undefined) {
  'use strict';
  pf.module.directive('pfPassword', function() {
    return angular.merge({
      scope: {
        confirm: '=?'
      }
    }, pf.baseDirective('password'), {
      link: function(scope, element) {
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
        if ('confirm' in scope) {
          scope.subform.name.$validators.confirm = function(modelValue) {
            if (!modelValue) {
              return false;
            }
            return modelValue === scope.confirm;
          };
        }
      }
    });
  });

}(window.practicalForms, window.angular));
