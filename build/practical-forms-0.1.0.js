/*! practical-forms v0.1.0 | (c) 2015, JJ Programs, LLC | Distributed under the MIT License */
angular.module('jjp.practical-forms.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("/jjp/pf/email.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform><label class=control-label>{{title}} <span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.email>- Not a valid Email!</span></span></label><p class=FormHint ng-show=hasTransclude ng-transclude></p><input class=form-control name=name ng-trim=ngTrim ng-model=ngModel ng-required=ngRequired placeholder=\"Ex: john.doe@company.com\" required type=\"email\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"><span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"></div>");
  $templateCache.put("/jjp/pf/number.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform><label class=control-label>{{title}} <span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.number>- Must be a Number!</span> <span ng-show=subform.name.$error.minlength>- Must be Longer then 0 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Invalid Input</span></span></label><p class=FormHint ng-show=hasTransclude ng-transclude></p><input class=form-control name=name ng-maxlength=255 ng-model=ngModel ng-required=ngRequired placeholder={{placeholder}} required type=\"number\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"><span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"></div>");
  $templateCache.put("/jjp/pf/options.html",
    "<div class=form-group ng-class=\"{'has-error':isError && isDirty, 'has-success':!isError && isDirty }\"><label class=control-label>{{title}} <span ng-if=required>*</span> <span ng-show=\"isError && isDirty\">- Invalid Input!</span></label><p class=FormHint ng-bind=description></p><span ng-form=subform ng-transclude></span></div>");
  $templateCache.put("/jjp/pf/password.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform><label class=control-label>{{title}} <span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.minlength>- Must be at least 8 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Must contain at least 1 lowercase letter, 1 uppercase letter, and 1 digit</span></span></label><p class=FormHint ng-show=hasTransclude ng-transclude></p><input class=form-control name=name ng-maxlength=255 ng-minlength=8 ng-model=ngModel ng-pattern=\"/(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$/\" ng-required=true required type=\"password\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"><span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"></div>");
  $templateCache.put("/jjp/pf/pattern.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.minlength>- Must be Longer then 0 characters</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then 255 characters</span> <span ng-show=subform.name.$error.pattern>- Invalid Input</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><input class=form-control name=name ng-model=ngModel ng-minlength=0 ng-maxlength=255 ng-required=ngRequired required ng-trim=\"ngTrim || true\" placeholder=\"{{placeholder}}\"> <span>{{ngModel}}</span> <span>{{ngMinlength}}</span> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/percentage.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform><label class=control-label>{{title}} <span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.percent>- Value must be between 0% and 100%</span></span></label><p class=FormHint ng-show=hasTransclude ng-transclude></p><input class=form-control name=name ng-trim=1 ng-model=ngModel ng-required=ngRequired pf-percentage-mask required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"><span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\" style=\"top:55px\"></div>");
  $templateCache.put("/jjp/pf/phone.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.pattern>- Invalid Input. Enter a valid phone number</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><input class=form-control name=name ng-model=ngModel ng-required=ngRequired required ng-trim=true ng-pattern=\"/^(?:\\([2-9]\\d{2}\\)\\ ?|[2-9]\\d{2}(?:\\-?|\\ ?))[2-9]\\d{2}[- ]?\\d{4}$/\" placeholder=\"Ex: (123)-456-7890\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/picture.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><div class=\"well row\"><div class=col-xs-9><h4><span ng-show=\"status == 4\">Success! File Uploaded</span> <span ng-show=\"status == 3\">Uploading...</span> <span ng-show=\"status == 2\">Loaded Image <small><i>Image may not be display correctly</i></small></span> <span ng-show=\"status == 1\">Loading Image {{load.loaded*100/load.total | number:0}}%</span> <span ng-show=\"status == 0\">No Image Selected</span> <span ng-show=\"status < 0\">Error! <span ng-show=\"status == -10\">- File is Too Large, Max Size: {{size/1000}} kB</span></span></h4><div class=\"fileinput-preview thumbnail\" style=\"width: 250px\" ng-show=\"status>= 2\"><img ng-src={{preview}} style=\"image-orientation: from-image\"></div><input class=form-control type=file name=name accept=image/* ng-required=ngRequired required style=display:none><p ng-show=\"status>=2\"><strong>File:</strong> {{ngModel.name}}</p></div><div class=col-xs-3><button type=button class=\"btn btn-block btn-default file-selector\">Select</button> <button type=button class=\"btn btn-block btn-success\" ng-click=Upload() ng-show=\"status>=2\" ng-if=showUpload>Upload</button> <button type=button class=\"btn btn-block btn-danger\" ng-click=Remove() ng-show=\"status>=2\">Remove</button></div></div></div>");
  $templateCache.put("/jjp/pf/state.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}} <span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.stateCode>- State is Invalid. Please enter the state name or the state code</span></span></label><p class=FormHint ng-transclude ng-transclude ng-show=hasTransclude>Form Hint</p><input class=form-control name=name ng-model=ngModel ng-required=ngRequired required ng-trim=true placeholder=\"Ex: OH or Ohio\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/text.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform><label class=control-label for={{::id}}>{{title}} <span ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert><span ng-message=required>&nbsp;-&nbsp;This field is required!</span> <span ng-message=\"minlength, maxlength\">&nbsp;-&nbsp;Text must be between 0 and 255 chacters</span></span></label><p class=FormHint ng-show=hasTransclude ng-transclude><div class=pf-form-control><input class=form-control id={{::id}} name=name ng-trim=1 ng-maxlength=255 ng-minlength=0 ng-model=ngModel ng-required=ngRequired placeholder={{placeholder}} required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/textarea.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.maxlength>- Must be shorter then {{ngMaxlength || 2500}} characters</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><textarea class=form-control type=text name=name ng-model=ngModel ng-maxlength=2500 ng-required=ngRequired required ng-trim=ngTrim placeholder={{placeholder}}>\n" +
    "\n" +
    "  <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span>\n" +
    "  <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span>\n" +
    "</textarea></div>");
  $templateCache.put("/jjp/pf/url.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.url>- Not a valid URL. Make sure it starts with 'http://'</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><input class=form-control type=url required name=name ng-model=ngModel ng-required=ngRequired required ng-trim=ngTrim placeholder=\"Ex: http://company.com\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/zipcode.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span> <span ng-show=subform.name.$error.pattern>- Invalid Zip Code. Plase enter the 5 digit zip code</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><input class=form-control name=name ng-model=ngModel ng-required=ngRequired required ng-pattern=\"/^\\d{5}(-\\d{4})?$/\" ng-trim=ngTrim placeholder=\"Ex: 12345\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></div>");
  $templateCache.put("/jjp/pf/date.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><p><input class=form-control ng-model=ngModel is-open=isOpen ng-required={{ngRequired}} ng-click=\"isOpen=true\" ng-focus=\"isOpen=true\" datepicker-popup=\"MMMM dd, yyyy\" min-date=\"minDate\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></p></div>");
}]);

(function(practicalForms, undefined) {
  /** Polyfill for string ops */
  practicalForms.startsWith = function(str, val) {
    return str.substring(0, val.length) === val;
  };
  /** Polyfill for string ops */
  practicalForms.endsWith = function(str, val) {
    return str.substring(str.length - val.length, str.length) === val;
  };

  /** Main angular modules */
  practicalForms.module = angular.module('jjp.practical-forms', ['jjp.practical-forms.templates', 'ui.bootstrap']);

  /**
   * Function to detect if element has transcluded elements
   * @param element Angular.element / jQuery element to detect
   */
  practicalForms.hasTransclude = function(element) {
    var e = element.find('p').html();
    if (e === undefined) {
      return false;
    }
    var hasTransclude = (e.length > 0);
    return hasTransclude;
  };

  /** Set the dirty flage when ever the modelValue changes */
  practicalForms.setDirty = function(modelValue, prevValue, form) {
    if (modelValue !== prevValue && modelValue !== "") {
      form.subform.name.$setDirty();
    }
  };

  /**
   * Generate id for elements using GUID like string
   * {@link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript}
   */
  practicalForms.GerenateId = function (){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  };

}(window.practicalForms = window.practicalForms || {}));

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

(function(practicalForms, undefined) {
  practicalForms.module.directive("pfEmailInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        ngTrim: "=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/email.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function( practicalForms, undefined ) {
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive("pfNumberInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: "=?",
        ngRequired:"=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/number.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));

(function(practicalForms, undefined) {
  practicalForms.module.directive("pfOptionGroup", function() {
    return {
      restrict: 'E',
      scope: {
        title: "@",
        description: '@?',
        required: "=?",
      },
      transclude: true,
      replace: true,
      templateUrl: "/jjp/pf/options.html",
      link: function(scope, element, attrs) {
        if (scope.required) {
          element.find(":input").attr("required", "required");
        }
        scope.$watch('subform.$invalid', function(isError) {
          scope.isError = isError;
        });
        scope.$watch('subform.$dirty', function(isDirty) {
          scope.isDirty = isDirty;
        });
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function( practicalForms, undefined ) {
  
  practicalForms.module.directive("pfPasswordInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel : '=',
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/password.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });


}( window.practicalForms = window.practicalForms || {} ));

(function(practicalForms, undefined) {

  practicalForms.module.directive("pfRegexInput", function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
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
      templateUrl: '/jjp/pf/pattern.html',
        link: function(scope, element, attrs, ctrls) {
          scope.hasTransclude = practicalForms.hasTransclude(element);
          scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
        }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  practicalForms.module.directive("pfPercentageInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/percentage.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });


  practicalForms.module.directive("pfPercentageMask", function() {
    return {
      restrict: 'A',
      require: 'ngModel',

      link: function(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function(inputValue) {
          return new practicalForms.Percentage(inputValue).pretty();
        });

        ctrl.$parsers.push(function(value) {
          var p = new practicalForms.Percentage(value);
          if (p.pretty() != ctrl.$viewValue) {
            ctrl.$setViewValue(p.pretty());
            ctrl.$render();
          }

          // Sets the validation
          if ((p.value() >= 0) && (p.value() <= 100)) {
            ctrl.$setValidity('percent', true);
          } else {
            ctrl.$setValidity('percent', false);
          }
          return String(p.value());
        });
      }
    };
  });

  practicalForms.Percentage = function(s) {
    s = String(s);
    // determine if the string has % & the value doesn't end with %;
    var needBackspace = (s.indexOf("%") < 0) && (!practicalForms.endsWith(s, '%'));
    //Remove the leading zeros
    var trimedValue = String(s).replace(/^0*/, '');
    //only return the numbers
    this._value = trimedValue.replace(/[^0-9]/g, '');
    if (needBackspace) {
      this.backspace();
    }
  };

  practicalForms.Percentage.prototype.value = function() {
    return parseFloat(this._value) || 0;
  };

  practicalForms.Percentage.prototype.pretty = function() {
    //Adds a leading zero to the front of the singel digit precents: 01%
    if (this.value() > 9)
      return this.value() + " %";
    else
      return "0" + this.value() + " %";
  };

  practicalForms.Percentage.prototype.backspace = function() {
    // Used to delete the last number of the val;
    // Useful for binding to form when you only have a pretty value
    this._value = this._value.slice(0, this._value.length - 1);
  };

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  practicalForms.module.directive("pfPhoneInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/phone.html',
      link: function(scope, element, attrs, ctrls) {
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  /*
   * Single Picture Uploader
   * Provides a preview of the image before uploading
   *
   */
  practicalForms.module.factory("jjp.FileObject", ["$q", "$log", function($q, $log) {
    var FileObject = {
      ReadImage: function(file) {
        var deferred = $q.defer();

        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred);
        reader.onerror = onError(reader, deferred);
        reader.onprogress = onProgress(reader, deferred);

        reader.readAsDataURL(file);

        return deferred.promise;
      }
    };

    var onLoad = function(reader, deferred) {
      return function() {
        deferred.resolve(reader.result);
      };
    };

    var onError = function(reader, deferred) {
      return function() {
        deferred.reject(reader.result);
      };
    };

    var onProgress = function(reader, deferred) {
      return function(event) {
        deferred.notify(event);
      };
    };

    return FileObject;
  }]);

  practicalForms.module.directive("pfPictureUploader", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        preview: '=?',
        url: '@?',
        result: '=?',
        status: '=?',
        maxSize: '=?',
        required: '=?',
        ngRequired: '=?',
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/picture.html',

      link: function(scope, element) {
        angular.element(element[0].querySelector('.file-selector')).bind("click", function(e) {
          element[0].querySelector('input').click();
        });
        angular.element(element[0].querySelector('input')).bind("change", function(e) {
          if (typeof((e.srcElement || e.target).files[0]) !== "undefined") {
            scope.$apply(function() {
              scope.ngModel = (e.srcElement || e.target).files[0];
              scope.Select();
            });
          }
        });
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      },

      controller: ['$scope', '$http', 'jjp.FileObject', function($scope, $http, FileObject) {

        $scope.Select = function() {
          $scope.status = 1;
          if ($scope.ngModel.size > $scope.size) {
            $scope.status = -10;
            $scope.result = "Image is too Big!";
            return;
          }
          FileObject.ReadImage($scope.ngModel).then(function(result) {
            $scope.preview = result;
            $scope.status = 2;
          }, function(error) {
            $scope.status = -1;
            $scope.result = error;
            console.warn(error);
          }, function(event) {
            $scope.load = event;
          });
        };

        $scope.Upload = function() {
          $scope.status = 3;
          var fd = new FormData();
          fd.append('file', $scope.ngModel);
          $http.post($scope.url, fd, {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined
            }
          }).success(function(data) {
            $scope.status = 4;
            $scope.result = data;
          }).error(function(error) {
            $scope.status = -1;
            $scope.result = error;
            console.warn(error);
          });
        };

        $scope.Remove = function() {
          $scope.ngModel = null;
          $scope.preview = null;
          $scope.status = 0;
        };

        $scope.CanUpload = function() {
          var urlPattern = new RegExp("^(ht|f)tp(s?)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?([\d\w\.\/\%\+\-\=\&amp;\?\:\\\&quot;\'\,\|\~\;]*)$");
          return urlPattern.test($scope.url);
        };

        // maxSize or 3MB
        $scope.size = $scope.maxSize || 3000000;
        $scope.ngModel = {};
        $scope.status = 0;
        $scope.result = {};
        $scope.showPreview = 0;
        $scope.showUpload = $scope.CanUpload();
      }]
    };
  });

}(window.practicalForms = window.practicalForms || {}));

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

(function( practicalForms, undefined ) {

  practicalForms.module.directive("pfStateCodeInput", function() {
    return {
      require: ['ngModel', '^form'],
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        output: "@"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/state.html',
      link: function(scope, element, attributes, ctrls) {
        var output = scope.output || "code";
        scope.hasTransclude = practicalForms.hasTransclude(element);
        var ngModel = ctrls[0];
        scope.subform.name.$validators.stateCode = function(modelValue) {
          if (!modelValue) return false;
          return modelValue.toLowerCase() in STATES;
        };
        scope.subform.name.$parsers.push(function(viewValue) {
          viewValue = viewValue.toLowerCase();
          if (viewValue in STATES) {
            if (output === "code") {
              return (viewValue.length == 2) ? viewValue : STATES[viewValue];
            } else {
              return (viewValue.length == 2) ? STATES[viewValue] : viewValue;
            }
          } else {
            return undefined;
          }
        });
        scope.$watch('subform.name.$modelValue', function(modelValue, prevValue, form) {
          if (modelValue !== prevValue && modelValue !== "") {
            form.subform.name.$setDirty();
          }
        });
      }
    };
  });

  var STATES = {
    'alabama': 'al',
    'alaska': 'ak',
    'arizona': 'az',
    'arkansas': 'ar',
    'california': 'ca',
    'colorado': 'co',
    'connecticut': 'ct',
    'delaware': 'de',
    'florida': 'fl',
    'georgia': 'ga',
    'hawaii': 'hi',
    'idaho': 'id',
    'illinois': 'il',
    'indiana': 'in',
    'iowa': 'ia',
    'kansas': 'ks',
    'kentucky': 'ky',
    'louisiana': 'la',
    'maine': 'me',
    'maryland': 'md',
    'massachusetts': 'ma',
    'michigan': 'mi',
    'minnesota': 'mn',
    'mississippi': 'ms',
    'missouri': 'mo',
    'montana': 'mt',
    'nebraska': 'ne',
    'nevada': 'nv',
    'new hampshire': 'nh',
    'new jersey': 'nj',
    'new mexico': 'nm',
    'new york': 'ny',
    'north carolina': 'nc',
    'north dakota': 'nd',
    'ohio': 'oh',
    'oklahoma': 'ok',
    'oregon': 'or',
    'pennsylvania': 'pa',
    'rhode island': 'ri',
    'south carolina': 'sc',
    'south dakota': 'sd',
    'tennessee': 'tn',
    'texas': 'tx',
    'utah': 'ut',
    'vermont': 'vt',
    'virginia': 'va',
    'washington': 'wa',
    'west virginia': 'wv',
    'wisconsin': 'wi',
    'wyoming': 'wy',
    'american samoa': 'as',
    'district of columbia': 'dc',
    'federated states of micronesia': 'fm',
    'guam': 'gu',
    'marshall islands': 'mh',
    'northern mariana islands': 'mp',
    'palau': 'pw',
    'puerto rico': 'pr',
    'virgin islands': 'vi',
    'armed forces africa': 'ae',
    'armed forces americas': 'aa',
    'armed forces canada': 'ae',
    'armed forces europe': 'ae',
    'armed forces middle east': 'ae',
    'armed forces pacific': 'ap',
    'al': 'alabama',
    'ak': 'alaska',
    'az': 'arizona',
    'ar': 'arkansas',
    'ca': 'california',
    'co': 'colorado',
    'ct': 'connecticut',
    'de': 'delaware',
    'fl': 'florida',
    'ga': 'georgia',
    'hi': 'hawaii',
    'id': 'idaho',
    'il': 'illinois',
    'in': 'indiana',
    'ia': 'iowa',
    'ks': 'kansas',
    'ky': 'kentucky',
    'la': 'louisiana',
    'me': 'maine',
    'md': 'maryland',
    'ma': 'massachusetts',
    'mi': 'michigan',
    'mn': 'minnesota',
    'ms': 'mississippi',
    'mo': 'missouri',
    'mt': 'montana',
    'ne': 'nebraska',
    'nv': 'nevada',
    'nh': 'new hampshire',
    'nj': 'new jersey',
    'nm': 'new mexico',
    'ny': 'new york',
    'nc': 'north carolina',
    'nd': 'north dakota',
    'oh': 'ohio',
    'ok': 'oklahoma',
    'or': 'oregon',
    'pa': 'pennsylvania',
    'ri': 'rhode island',
    'sc': 'south carolina',
    'sd': 'south dakota',
    'tn': 'tennessee',
    'tx': 'texas',
    'ut': 'utah',
    'vt': 'vermont',
    'va': 'virginia',
    'wa': 'washington',
    'wv': 'west virginia',
    'wi': 'wisconsin',
    'wy': 'wyoming',
    'as': 'american samoa',
    'dc': 'district of columbia',
    'fm': 'federated states of micronesia',
    'gu': 'guam',
    'mh': 'marshall islands',
    'mp': 'northern mariana islands',
    'pw': 'palau',
    'pr': 'puerto rico',
    'vi': 'virgin islands',
  };
}( window.practicalForms = window.practicalForms || {} ));

(function( practicalForms, undefined ) {
  /**
   * Text input that has basic validation
   */
  practicalForms.module.directive("pfTextInput", function(){
    return {
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: "=?",
        ngRequired:"=?"
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/text.html',
      link: function(scope, element, attrs, ctrls){
        scope.id = practicalForms.GerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));

(function( practicalForms, undefined ) {
  /**
   * Text area input
   */
  practicalForms.module.directive("pfTextarea", function(){
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
      templateUrl: '/jjp/pf/textarea.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));

(function(practicalForms, undefined) {

  practicalForms.module.directive("pfUrlInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        ngTrim: "=?"
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/url.html',
      link: function(scope, element, attrs, ctrls) {
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function( practicalForms, undefined ) {
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive("pfZipCodeInput", function(){
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
      templateUrl: '/jjp/pf/zipcode.html',
      link: function(scope, element, attrs, ctrls){
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));

(function(practicalForms, undefined) {
  practicalForms.module.directive("pfConfirm", ['$modal', function($modal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: "@",
        pfMessage: "@",
        pfConfirm: "&",
      },
      link: function($scope, $element, $attrs) {
        $element.bind('click', function() {
          var message = $scope.pfMessage || "Are you sure ?";
          var title = $scope.pfTitle || "Warning!";
          var modalHtml = '<div class="modal-header"><h1>' + title + '</h1></div>';
          modalHtml += '<div class="modal-body">' + message + '</div>';
          modalHtml += '<div class="modal-footer">';
          modalHtml += '<button class="btn btn-primary" ng-click="Ok()">OK</button>';
          modalHtml += '<button class="btn btn-warning" ng-click="Cancel()">Cancel</button></div>';

          var modalInstance = $modal.open({
            template: modalHtml,
            controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
              $scope.Ok = function() {
                $modalInstance.close();
              };
              $scope.Cancel = function() {
                $modalInstance.dismiss('cancel');
              };
            }],
          });
          modalInstance.result.then(function() {
            $scope.pfConfirm();
          }, function() {
            //Modal dismissed
          });
        });
      }
    };
  }]);
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {

  practicalForms.module.directive("pfDateInput", function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: "=?",
        ngRequired: "=?",
        format: "@?",
        minDate: "=?",
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/date.html',
      link: function(scope, element, attrs, ctrls) {
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));