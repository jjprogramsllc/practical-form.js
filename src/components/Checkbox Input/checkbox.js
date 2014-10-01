/*
 * Basic form input that has basic validation
 * Uses basic angular form directives 
 *
 */

module.directive("pfCheckboxInput", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
    },
    transclude: true,
    replace: true,
    template:'<div class="checkbox"><label><span ng-transclude></span>{{title}}</label></div>',
  };
});
