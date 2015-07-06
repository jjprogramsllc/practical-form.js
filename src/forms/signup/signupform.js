(function(practicalForms, undefined) {
  practicalForms.module.directive("pfFormSignup", function() {
    return {
      scope: {
        header: '@',
        email: '@',
        password: '@',
        ngModel: '=',
        ngSubmit: "&"
      },
      require: "^form",
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/signupform.html',
      link: function(scope, element, attrs, ctrls) {
        scope.headerTxt = (scope.header === "" || scope.header === undefined) ? "Signup Form" : scope.header;
        scope.hasTransclude = practicalForms.hasTransclude(element);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
