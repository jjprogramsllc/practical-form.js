(function(practicalForms, undefined) {
  /**
   * Text area input
   */
  practicalForms.module.directive("pfTextarea", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        ngMinlength: "=?",
        ngMaxlength: "=?",
        ngPattern: "@?",
        ngTrim: "=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/textarea.html',
      link: function(scope, element, attrs, ctrls) {
        scope.id = practicalForms.GerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
