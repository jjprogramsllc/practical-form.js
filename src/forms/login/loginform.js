(function( practicalForms, undefined ) {
  /**
   * Text input that has basic validation
   */
  practicalForms.module.directive("pfFormLogin", function(){
    return {
      scope: {
        header: '@',
        email: '@',
        password: '@',
        ngModel: '=',
        ngSubmit: "&"
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/loginform.html',
      link: function(scope, element, attrs, ctrls){
        scope.headerTxt = (scope.header === "" || scope.header === undefined) ? "Login Form" : scope.header ;
        // scope.emailTxt = (scope.email === "" || scope.email === undefined) ? "Please enter your email" : scope.header ;
        // scope.passwordTxt = (scope.header === "" || scope.header === undefined) ? "Please enter " : scope.header ;
        scope.hasTransclude = practicalForms.hasTransclude(element);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));
