angular.module('PracticalForms', [''])

.directive("jjpTextInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngMinlength:"=?",
      ngMaxlength:"=?",
      ngPattern:"@?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/textForm.html',
  };
})
.directive("jjpPasswordInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/passwordForm.html',
  };
})
.directive("jjpEmailInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/emailForm.html',
  };
})
.directive("jjpUrlInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/urlForm.html',
  };
})

.directive("jjpTextarea", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngMinlength:"=?",
      ngMaxlength:"=?",
      ngPattern:"@?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/textareaForm.html',
  };
})
// Radio and checkbox inputs
.directive("jjpOptionGroup", function(){
  return {
    restrict: 'E',
    require: "^form",
    scope:{
      title: "@",
      description: '@?',
      required: "=?",
    },
    transclude: true,
    replace: true,
    templateUrl:"templates/optionGroupForm.html",
    link: function(scope, element, attrs, formController) {
      if(scope.required){
        element.find(":input").attr("required","required");
      }
      scope.$watch('subform.$invalid', function(isError) {
        scope.isError = isError;
      });
      scope.$watch('subform.$dirty', function(isDirty) {
        scope.isDirty = isDirty;
      });
    }
  };
})
.directive("jjpRadioInput", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
    },
    transclude: true,
    replace: true,
    template:'<div class="radio"><label><span ng-transclude></span>{{title}}</label></div>',
  };
})

.directive("jjpCheckboxInput", function(){
  return {
    restrict: 'E',
    scope:{
      title: "@",
    },
    transclude: true,
    replace: true,
    template:'<div class="checkbox"><label><span ng-transclude></span>{{title}}</label></div>',
  };
})

// Other more complex inputs
.directive("jjpPhoneInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/phoneForm.html',
  };
})
.directive("jjpStateCodeInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/stateCodeForm.html',
  };
})

.directive("jjpZipCodeInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      ngTrim:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/zipCodeForm.html',
  };
})



// angualr UI - components
.directive("jjpDateInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?",
      format: "@",
      minDate: "=",
    },
    replace: true,
    transclude: true,
    templateUrl: 'templates/dateForm.html',
  };
})
;
