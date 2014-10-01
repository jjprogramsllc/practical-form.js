/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfDateInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      format: "@",
      minDate: "=",
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/dateForm.html',
  };
});
