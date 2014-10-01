/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

angular.module('pf.PracticalForms').directive("pfRadioInput", function(){
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
