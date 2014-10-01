/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfTextInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@',
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
    templateUrl: 'templates/textForm.html',
  };
});
