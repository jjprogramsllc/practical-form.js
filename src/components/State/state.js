/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfStateCodeInput", function(){
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
    templateUrl: 'templates/stateCodeForm.html',
  };
});
