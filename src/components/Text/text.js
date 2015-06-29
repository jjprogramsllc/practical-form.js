(function( practicalForms, undefined ) {
  /**
   * Text input that has basic validation
   */
  practicalForms.module.directive("pfTextInput", function(){
    return {
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: "=?",
        ngRequired:"=?"
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/text.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));
