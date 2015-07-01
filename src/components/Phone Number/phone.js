(function(practicalForms, undefined) {
  practicalForms.module.directive("pfPhoneInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/phone.html',
      link: function(scope, element, attrs, ctrls) {
        scope.id = practicalForms.GerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));
