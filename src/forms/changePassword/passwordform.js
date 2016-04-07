(function(pf, undefined) {
  'use strict';

  function parseSettings(opt) {
    opt = opt || { meta: {} };
    return {
      meta: pf.formOptions(opt, 'Change Password', 'Submit'),
      oldpassword: pf.vORdInput(opt, 'oldpassword', 'Old Password', '', ''),
      newpassword: pf.vORdInput(opt, 'newpassword', 'New Password', '', ''),
      confirmPassword: pf.vORdInput(opt, 'confirmPassword', 'Confirm Password', '', ''),
    };
  }
  pf.module.directive('pfFormPassword', function() {
    return {
      scope: {
        ngModel: '=',
        ngDisabled: '=?',
        ngSubmit: '&',
        settings: '=?',
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/passwordform.html',
      link: function(scope, element) {
        scope.s = parseSettings(scope.settings);
        scope.hasTransclude = pf.hasTransclude(element);
      }
    };
  });

} (window.practicalForms));
