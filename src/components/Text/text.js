/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfTextInput", function(){
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
    templateUrl: '/jjp/pf/text.html',
  };
});
