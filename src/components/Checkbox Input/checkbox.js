(function(practicalForms, undefined) {
  practicalForms.module.directive("pfCheckboxInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: "@",
      },
      transclude: true,
      replace: true,
      template: '<div class="checkbox"><label><span ng-transclude></span>{{title}}</label></div>',
    };
  });

}(window.practicalForms = window.practicalForms || {}));
