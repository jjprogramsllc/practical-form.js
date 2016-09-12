(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfFormPassword', ['pfConfig', function(pfConfig) {
    function parseOpts(opts) {
      opts = opts || {
        meta: {}
      };
      return {
        meta: pfConfig.formOptions(opts, 'Change Password', 'Submit'),
        oldpassword: pfConfig.vORdInput(opts, 'oldpassword', 'Old Password', '', ''),
        newpassword: pfConfig.vORdInput(opts, 'newpassword', 'New Password', '', ''),
        confirmPassword: pfConfig.vORdInput(opts, 'confirmPassword', 'Confirm Password', '', ''),
      };
    }
    return pfConfig.baseFormDirective('password', {}, parseOpts);
  }]);
}(window.angular));
