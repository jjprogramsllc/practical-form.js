(function(practicalForms, undefined) {
  practicalForms.module.directive("pfRadioInput", function(){
    return {
      restrict: 'E',
      scope:{
        title: "@",
      },
      transclude: true,
      replace: true,
      template:'<div class="radio"><label><span ng-transclude></span>{{title}}</label></div>',
    };
  });

}(window.practicalForms = window.practicalForms || {}));
