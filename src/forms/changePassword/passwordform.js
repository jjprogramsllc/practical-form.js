(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfFormPassword', function() {
    return {
      scope: {
        header: '@',
        ngModel: '=',
        ngSubmit: '&',
        oldPassword: '@',
        newPassword: '@',
        confirmPassword: '@',

        oldPasswordHelp: '@',
        newPasswordHelp: '@',
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/passwordform.html',
      link: function(scope, element) {
        scope._header = practicalForms.valOrDefault(scope.header, 'Change Password');
        scope._oldpassword = practicalForms.valOrDefault(scope.oldPassword , 'oldPassword');
        scope._newpassword = practicalForms.valOrDefault(scope.newPassword , 'newPassword');
        scope._confirmPassword = practicalForms.valOrDefault(scope.confirmPassword , 'confirmPassword');
        scope.hasTransclude = practicalForms.hasTransclude(element);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
