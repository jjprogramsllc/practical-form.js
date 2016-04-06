(function(pf, undefined) {
  'use strict';

  function parseOpts(opts) {
    opts = opts || { meta: {} };
    var settings = {
      meta: pf.formOptions(opts, 'Login', 'Login'),
      username: pf.vORdInput(opts, 'username', 'Username', '', 'Ex. johndoe2'),
      password: pf.vORdInput(opts, 'password', 'Password', '', ''),
    };
    settings.meta.emailOnly = pf.valOrDefault(opts.meta.emailOnly, false);
    return settings;
  }

  pf.module.directive('pfFormLogin', function() {
    return {
      scope: {
        ngModel: '=',
        ngSubmit: '&',
        settings: '=?'
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/loginform.html',
      link: function(scope, element) {
        scope.s = parseOpts(scope.settings);
        scope.hasTransclude = pf.hasTransclude(element);
      }
    };
  });

} (window.practicalForms = window.practicalForms || {}));
