(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfFormRegister', ['pfConfig', function(pfConfig) {
    function parseOpts(opts) {
      opts = opts || {};
      return {
        meta: pfConfig.formOptions(opts, 'Register', 'Create Account'),
        firstname: pfConfig.vORdInput(opts, 'firstname', 'First Name', '', 'Ex. John'),
        lastname: pfConfig.vORdInput(opts, 'lastname', 'Last Name', '', 'Ex. Doe'),
        email: pfConfig.vORdInput(opts, 'email', 'Email', '', 'Ex. john.doe@someplace.com'),
        password: pfConfig.vORdInput(opts, 'password', 'Password', '', ''),
        confirmPassword: pfConfig.vORdInput(opts, 'confirmPassword', 'Confirm Password', '', ''),
      };
    }
    return pfConfig.baseFormDirective('register', {}, parseOpts);
  }]);
}(window.angular));
