/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfStateCodeInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/state.html',
  };
});
