(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfGroup', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        description: '@?',
      },
      transclude: true,
      replace: true,
      templateUrl: '/jjp/pf/group.html',
    };
  });
}(window.practicalForms = window.practicalForms || {}));
