(function( practicalForms, undefined ) {
  
  practicalForms.module.directive("pfPasswordInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel : '=',
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/password.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });


}( window.practicalForms = window.practicalForms || {} ));
