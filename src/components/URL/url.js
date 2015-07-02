(function(practicalForms, undefined) {

  practicalForms.module.directive("pfUrl", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        ngTrim: "=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/url.html',
      link: function(scope, element, attrs, ctrls) {
        scope.id = practicalForms.GerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));
