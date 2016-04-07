(function(pf, undefined) {
  'use strict';
  pf.module.directive('pfCheckbox', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired:'=?'
      },
      transclude: true,
      replace: true,
      templateUrl: '/jjp/pf/checkbox.html',
      link: function(scope, element){
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.ngRequired = scope.ngRequired || false;
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));
