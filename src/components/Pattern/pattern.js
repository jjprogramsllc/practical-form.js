(function(practicalForms, undefined) {

  practicalForms.module.directive("pfRegexInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: "=?",
        ngRequired:"=?",
        ngMinlength:"=?",
        ngMaxlength:"=?",
        ngPattern:"@?",
        ngTrim:"=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/pattern.html',
        link: function(scope, element, attrs, ctrls) {
          scope.hasTransclude = practicalForms.hasTransclude(element);
          scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
        }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
