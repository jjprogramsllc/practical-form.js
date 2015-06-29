(function(practicalForms, undefined) {

  practicalForms.module.directive("pfDateInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        format: "@?",
        minDate: "=?",
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/date.html',
      link: function(scope, element, attrs, ctrls) {
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
