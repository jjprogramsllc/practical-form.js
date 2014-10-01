/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfZipCodeInput", function(){
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
    templateUrl: 'templates/zipCodeForm.html',
  };
});
