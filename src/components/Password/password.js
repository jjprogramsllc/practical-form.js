(function( practicalForms, undefined ) {

  practicalForms.module.directive("pfPasswordInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: "=?",
        ngRequired:"=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/password.html',
      link: function(scope, element, attrs, ctrls){
        scope.id = practicalForms.GerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
        console.log(scope);
      }
    };
  });


}( window.practicalForms = window.practicalForms || {} ));
