(function( practicalForms, undefined ) {
  'use strict';
  practicalForms.module.directive('pfPassword', function(){
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
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
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
