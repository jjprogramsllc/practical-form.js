(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfFormRegister', function() {
    return {
      scope: {
        header: '@',
        ngModel: '=',
        ngSubmit: '&',
        firstname: '@',
        lastname: '@',
        email: '@',
        password: '@',
        confirmPassword: '@',

        firstnameHelp: '@',
        lastnameHelp: '@',
        emailHelp: '@',
        passwordHelp: '@',
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/registerform.html',
      link: function(scope, element) {
        scope._header = practicalForms.valOrDefault(scope.header, 'Register');
        scope._firstname = practicalForms.valOrDefault(scope.firstname ,'firstname');
        scope._lastname = practicalForms.valOrDefault(scope.lastname ,'lastname');
        scope._email = practicalForms.valOrDefault(scope.email , 'email');
        scope._password = practicalForms.valOrDefault(scope.password , 'password');
        scope._confirmPassword = practicalForms.valOrDefault(scope.confirmPassword , 'confirmPassword');
        scope.hasTransclude = practicalForms.hasTransclude(element);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
