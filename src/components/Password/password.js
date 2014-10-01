/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfPasswordInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/passwordForm.html',
  };
});
