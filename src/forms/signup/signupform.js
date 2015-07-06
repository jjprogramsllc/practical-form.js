(function(practicalForms, undefined) {
  practicalForms.module.directive("pfFormSignup", function() {
    return {
      scope: {
        header: '@',
        ngModel: '=',
        ngSubmit: "&",
        firstname: "@",
        lastname: "@",
        email: "@",
        password: "@",
        confirmPassword: "@",

        firstnameHelp: "@",
        lastnameHelp: "@",
        emailHelp: "@",
        passwordHelp: "@",
      },
      require: "^form",
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/signupform.html',
      link: function(scope, element, attrs, ctrls) {
        scope._header = practicalForms.valOrDefault(scope.header, "Signup Form");
        scope._firstname = practicalForms.valOrDefault(scope.firstname ,"firstname");
        scope._lastname = practicalForms.valOrDefault(scope.lastname ,"lastname");
        scope._email = practicalForms.valOrDefault(scope.email , "email");
        scope._password = practicalForms.valOrDefault(scope.password , "password");
        scope._confirmPassword = practicalForms.valOrDefault(scope.confirmPassword , "confirmPassword");
        scope.hasTransclude = practicalForms.hasTransclude(element);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
