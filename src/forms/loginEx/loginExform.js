(function(pf, undefined) {
    'use strict';

    function parseOptions(opt) {
        opt = opt || {};
        opt.onlyEmail = pf.valOrDefault(opt.onlyEmail, false);
        opt.usernameHelp = pf.valOrDefault(opt.usernameHelp, '');
        opt.passwordHelp = pf.valOrDefault(opt.passwordHelp, '');
        opt.header = pf.valOrDefault(opt.header, 'Login');
        opt.username = pf.valOrDefault(opt.username, 'username');
        opt.password = pf.valOrDefault(opt.password, 'password');
        return opt;
    }

    pf.module.directive('pfFormLoginEx', function() {
        return {
            scope: {
                header: '@',
                ngModel: '=',
                ngSubmit: '&',
                options: '=?'
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: '/jjp/pf/loginExform.html',
            link: function(scope) {
                scope.opt = parseOptions(scope.options);
            }
        };
    });

}(window.practicalForms = window.practicalForms || {}));
