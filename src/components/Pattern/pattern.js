(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfRegex', function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: '=?',
        ngRequired:'=?',
        ngMinlength:'=?',
        ngMaxlength:'=?',
        ngPattern:'@?',
        ngTrim:'=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/pattern.html',
        link: function(scope, element) {
          scope.id = practicalForms.gerenateId();
          scope.hasTransclude = practicalForms.hasTransclude(element);
          scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
        }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
