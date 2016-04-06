(function(pf, undefined) {
  'use strict';

  function parseOpts(opts) {
    opts = opts || {};
    return {
      meta: pf.formOptions(opts, 'Register', 'Create Account'),
      firstname: pf.vORdInput(opts, 'firstname', 'First Name', '', 'Ex. John'),
      lastname: pf.vORdInput(opts, 'lastname', 'Last Name', '', 'Ex. Doe'),
      email: pf.vORdInput(opts, 'email', 'Email', '', 'Ex. john.doe@someplace.com'),
      password: pf.vORdInput(opts, 'password', 'Password', '', ''),
      confirmPassword: pf.vORdInput(opts, 'confirmPassword', 'Confirm Password', '', ''),
    };
  }
  pf.module.directive('pfFormRegister', function() {
    return {
      scope: {
        ngModel: '=',
        ngSubmit: '&',
        settings: '=?'
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/registerform.html',
      link: function(scope, element) {
        scope.s = parseOpts(scope.settings);
        scope.hasTransclude = pf.hasTransclude(element);
      }
    };
  });

} (window.practicalForms = window.practicalForms || {}));
