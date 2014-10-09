/*
 * Basic form input that has basic validation
 * Uses basic angular form directives
 *
 */

module.directive("pfNumberInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/number.html',
  };
});
