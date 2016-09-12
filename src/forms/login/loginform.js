(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfFormLogin', ['pfConfig', function(pfConfig) {
    function parseOpts(opts) {
      opts = opts || { meta: {} };
      var settings = {
        meta: pfConfig.formOptions(opts, 'Login', 'Login'),
        username: pfConfig.vORdInput(opts, 'username', 'Username', '', 'Ex. johndoe2'),
        password: pfConfig.vORdInput(opts, 'password', 'Password', '', ''),
      };
      settings.meta.emailOnly = pfConfig.valOrDefault(opts.meta.emailOnly, false);
      return settings;
    }
    return pfConfig.baseFormDirective('login', {}, parseOpts);
  }]);
}(window.angular));
