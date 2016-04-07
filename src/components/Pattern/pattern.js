(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfRegex', function(){
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
          scope.id = pf.gerenateId();
          scope.hasTransclude = pf.hasTransclude(element);
          scope.$watch('subform.name.$modelValue', pf.setDirty);
        }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
