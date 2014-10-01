/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfOptionGroup", function(){
  return {
    restrict: 'E',
    require: "^form",
    scope:{
      title: "@",
      description: '@?',
      required: "=?",
    },
    transclude: true,
    replace: true,
    templateUrl:"templates/optionGroupForm.html",
    link: function(scope, element, attrs, formController) {
      if(scope.required){
        element.find(":input").attr("required","required");
      }
      scope.$watch('subform.$invalid', function(isError) {
        scope.isError = isError;
      });
      scope.$watch('subform.$dirty', function(isDirty) {
        scope.isDirty = isDirty;
      });
    }
  };
});
