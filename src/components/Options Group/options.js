/*
 * Basic form input that has basic validation
 * Uses basic angular form directives
 *
 */

module.directive("pfOptionGroup", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
      description: '@?',
      required: "=?",
    },
    transclude: true,
    replace: true,
    templateUrl:"/jjp/pf/options.html",
    link: function(scope, element, attrs) {
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
