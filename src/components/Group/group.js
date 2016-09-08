(function(angular) {
  'use strict';
  angular.module('jjp.practical-forms')

  .directive('pfGroup', [ function() {
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
  }]);
}(window.angular));
