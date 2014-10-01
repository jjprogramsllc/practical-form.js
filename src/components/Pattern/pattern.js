/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfRegexInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngMinlength:"=?",
      ngMaxlength:"=?",
      ngPattern:"@?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/pattern.html',
  };
});
