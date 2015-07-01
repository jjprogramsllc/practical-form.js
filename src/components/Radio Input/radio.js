(function(practicalForms, undefined) {
  practicalForms.module.directive("pfRadioInput", function(){
    return {
      restrict: 'E',
      scope:{
        title: "@",
        value: "@",
        ngModel: "=",
        checked: "=?",
        ngChecked:"=?"
      },
      transclude: true,
      replace: true,
      template: '<div class="radio"><label><input type="radio" ng-model="ngModel" name={{name}} value={{value}} checked={{ngChecked}}>{{title}}&nbsp;<span class="pf-required" ng-show="required || ngRequired">*</span></label></div>',
      link: function(scope, element, attrs, ctrls){
        scope.name = attrs.ngModel;
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
