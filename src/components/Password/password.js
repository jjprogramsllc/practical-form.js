(function(pf, undefined ) {
  'use strict';
  pf.module.directive('pfPassword', function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: '=?',
        ngRequired:'=?',
        confirm: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/password.html',
      link: function(scope, element){
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
        if('confirm' in scope){
          scope.subform.name.$validators.confirm = function(modelValue) {
            if (!modelValue) { return false; }
            return modelValue === scope.confirm;
          };
        }
      }
    };
  });


}( window.practicalForms = window.practicalForms || {} ));
