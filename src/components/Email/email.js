/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfEmailInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/email.html',
  };
});
