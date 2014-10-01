/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfDateInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      format: "@?",
      minDate: "=?",
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/date.html',
  };
});
