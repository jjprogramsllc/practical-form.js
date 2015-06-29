(function( practicalForms, undefined ) {
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive("pfZipCodeInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel : '=',
        required: "=?",
        ngRequired:"=?",
        ngTrim:"=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/zipcode.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));
