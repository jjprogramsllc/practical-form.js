/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfTextarea", function(){
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
    templateUrl: 'templates/textareaForm.html',
  };
});
