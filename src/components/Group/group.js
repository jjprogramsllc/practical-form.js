(function(practicalForms, undefined) {
  practicalForms.module.directive("pfGroup", function() {
    return {
      restrict: 'E',
      scope: {
        title: "@",
        description: '@?',
        required: "=?",
        ngRequired: "=?"
      },
      transclude: true,
      replace: true,
      templateUrl: "/jjp/pf/group.html",
      link: function(scope, element, attrs) {
        scope.id = practicalForms.GerenateId();
        if (scope.required) {
          element.find(":input").attr("required", "required");
        }
        scope.$watch('subform.$invalid', function(isError) {
          scope.isError = isError;
        });
        scope.$watch('subform.$dirty', function(isDirty) {
          scope.isDirty = isDirty;
        });
        var x = element.find("input");
        // console.log(x.length);
        // .get(0).prop("checked", true);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));
