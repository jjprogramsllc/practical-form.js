/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfPasswordInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/password.html',
  };
});
