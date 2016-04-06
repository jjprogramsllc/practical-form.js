/*! practical-forms v1.1.1 | (c) 2016, JJ Programs, LLC | Distributed under the MIT License */
angular.module('jjp.practical-forms.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("/jjp/pf/checkbox.html",
    "<div ng-class=\"{'has-error':!ngModel && ngRequired, 'has-success':ngModel&& ngRequired }\"><div class=checkbox tabindex=-1><label for={{::id}}><input id={{::id}} ng-model=ngModel ng-required={{ngRequired}} type=\"checkbox\">{{title}}&nbsp; <span class=pf-required ng-show=\"required || ngRequired\">*</span></label></div></div>");
  $templateCache.put("/jjp/pf/email.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-message=email>This doesn't seem to be a valid email!</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint ng-show=hasTransclude ng-transclude id={{::id}}-tip></p><div class=pf-form-control><input id={{::id}} aria-describedby={{::id}}-tip class=form-control name=name ng-trim=ngTrim ng-model=ngModel ng-required=ngRequired placeholder=\"Example: john.doe@company.com\" required type=\"email\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/group.html",
    "<fieldset><legend>{{title}}</legend><p class=help-block>{{description}}</p><p ng-transclude>&nbsp;</p></fieldset>");
  $templateCache.put("/jjp/pf/number.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-message=number>That is not a number!</span> <span ng-message=max>Numbers must be less then {{max}}</span> <span ng-message=min>Numbers must be greater then {{min}}</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude></p><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-maxlength=255 ng-model=ngModel ng-required=ngRequired placeholder={{placeholder}} required type=number pf-number-mask max={{max}} min=\"{{min}}/\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/password.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=minlength>The password must be at least 8 characters long!</span> <span ng-message=maxlength>The password must be shorter then 255 characters!</span> <span ng-message=pattern>The password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 digit!</span> <span ng-message=confirm>The confirmation password doesn't match the original!</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-trim=1 ng-maxlength=255 ng-minlength=8 ng-model=ngModel ng-pattern=\"/(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)[0-9a-zA-Z!@#$%^&*()]*$/\" ng-required=ngRequired placeholder={{placeholder}} required type=\"password\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/pattern.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-show=pattern>Text is invalid</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-trim=\"ngTrim || true\" ng-maxlength=255 ng-minlength=0 ng-model=ngModel ng-required=ngRequired placeholder={{placeholder}} required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/percentage.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-message=percent>- Value must be between 0% and 100%</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude></p><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control name=name ng-trim=1 ng-model=ngModel ng-required=ngRequired pf-percentage-mask required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/phone.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-message=pattern>This doesn't seem to be valid phone number</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-model=ngModel ng-pattern=\"/^(?:\\([2-9]\\d{2}\\)\\ ?|[2-9]\\d{2}(?:\\-?|\\ ?))[2-9]\\d{2}[- ]?\\d{4}$/\" ng-required=ngRequired ng-trim=true placeholder=\"Example: (123)-456-7890\" required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/picture.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><div class=\"well row\"><div class=col-xs-9><h4><span ng-show=\"status == 4\">Success! File Uploaded</span> <span ng-show=\"status == 3\">Uploading...</span> <span ng-show=\"status == 2\">Loaded Image <small><i>Image may not be display correctly</i></small></span> <span ng-show=\"status == 1\">Loading Image {{load.loaded*100/load.total | number:0}}%</span> <span ng-show=\"status == 0\">No Image Selected</span> <span ng-show=\"status < 0\">Error! <span ng-show=\"status == -10\">- File is Too Large, Max Size: {{size/1000}} kB</span></span></h4><div class=\"fileinput-preview thumbnail\" style=\"width: 250px\" ng-show=\"status>= 2\"><img ng-src={{preview}} style=\"image-orientation: from-image\"></div><input class=form-control type=file name=name accept=image/* ng-required=ngRequired required style=display:none><p ng-show=\"status>=2\"><strong>File:</strong> {{ngModel.name}}</p></div><div class=col-xs-3><button type=button class=\"btn btn-block btn-default file-selector\">Select</button> <button type=button class=\"btn btn-block btn-success\" ng-click=Upload() ng-show=\"status>=2\" ng-if=showUpload>Upload</button> <button type=button class=\"btn btn-block btn-danger\" ng-click=Remove() ng-show=\"status>=2\">Remove</button></div></div></div>");
  $templateCache.put("/jjp/pf/radio.html",
    "<div ng-class=\"{'has-error':!ngModel && ngRequired, 'has-success':ngModel&& ngRequired }\"><div class=radio tabindex=-1><label for={{::id}}><input id={{::id}} ng-model=ngModel ng-required={{ngRequired}} type=radio name={{name}} value=\"{{value}}\">{{title}}&nbsp; <span class=pf-required ng-show=\"required || ngRequired\">*</span></label></div></div>");
  $templateCache.put("/jjp/pf/state.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-message=stateCode>State is Invalid. Please enter the state name or the state code!</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-model=ngModel ng-required=ngRequired ng-trim=true placeholder=\"Ex: OH or Ohio\" required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/text.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude></p><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-trim=1 ng-maxlength=255 ng-minlength=0 ng-model=ngModel ng-required=ngRequired placeholder={{placeholder}} required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/textarea.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=maxlength>Text must be shorter then {{ngMaxlength || 2500}} characters!</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><textarea aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-trim=ngTrim ng-maxlength=2500 ng-model=ngModel ng-required=ngRequired placeholder={{placeholder}} required>\n" +
    "    <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span>\n" +
    "    <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span>\n" +
    "  </textarea></div></div>");
  $templateCache.put("/jjp/pf/url.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=\"minlength, maxlength\">Text must be between 0 and 255 characters!</span> <span ng-message=url>Not a valid URL. Make sure it starts with 'http://'</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-trim=ngTrim ng-model=ngModel ng-required=ngRequired placeholder=\"Example: http://company.com\" required type=\"url\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/zipcode.html",
    "<div class=\"form-group has-feedback\" ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\" ng-form=subform tabindex=-1><label class=control-label for={{::id}}>{{title}} <span class=pf-required ng-if=\"required || ngRequired\">*</span> <span ng-messages=subform.name.$error ng-show=\"subform.name.$invalid && subform.name.$dirty\" role=alert>&nbsp;&nbsp; <span ng-message=required>This field is required!</span> <span ng-message=pattern>Invalid Zip Code. Plase enter the 5 digit zip code</span></span> <span ng-show=\"subform.name.$valid && subform.name.$dirty\" role=alert>&nbsp;&nbsp;All Good!</span></label><p class=FormHint id={{::id}}-tip ng-show=hasTransclude ng-transclude><div class=pf-form-control><input aria-describedby={{::id}}-tip class=form-control id={{::id}} name=name ng-trim=ngTrim ng-model=ngModel ng-pattern=\"/^\\d{5}(-\\d{4})?$/\" ng-required=ngRequired placeholder=\"Ex: 12345\" required> <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"subform.name.$invalid && subform.name.$dirty\">&nbsp;</span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" ng-show=\"!subform.name.$invalid && subform.name.$dirty\">&nbsp;</span></div></div>");
  $templateCache.put("/jjp/pf/confirm.html",
    "<div class=modal-header><button type=button class=close aria-label=ctrl.Close ng-click=Cancel()><span aria-hidden=true>&times;</span></button><h4 class=modal-title>{{params.title}}</h4></div><div class=modal-body><p>{{params.message}}</p></div><div class=modal-footer><button type=button class=\"btn btn-primary\" ng-click=Ok()>OK</button> <button type=button class=\"btn btn-warning\" ng-click=Cancel()>Cancel</button></div>");
  $templateCache.put("/jjp/pf/date.html",
    "<div class=\"form-group has-feedback\" ng-form=subform ng-class=\"{'has-error':subform.name.$invalid && subform.name.$dirty, 'has-success':!subform.name.$invalid && subform.name.$dirty }\"><label class=control-label>{{title}}<span ng-if=\"required || ngRequired\">*</span> <span ng-show=\"subform.name.$invalid && subform.name.$dirty\"><span ng-show=subform.name.$error.required>- Required!</span></span></label><p class=FormHint ng-transclude ng-show=hasTransclude></p><p><input class=form-control ng-model=ngModel is-open=isOpen ng-required={{ngRequired}} ng-click=\"isOpen=true\" ng-focus=\"isOpen=true\" uib-datepicker-popup=\"MMMM dd, yyyy\" datepicker-options=\"datepickerOptions\"> <span class=\"glyphicon glyphicon-remove form-control-feedback\" style=top:55px ng-show=\"subform.name.$invalid && subform.name.$dirty\"></span> <span class=\"glyphicon glyphicon-ok form-control-feedback\" style=top:55px ng-show=\"!subform.name.$invalid && subform.name.$dirty\"></span></p></div>");
  $templateCache.put("/jjp/pf/info.html",
    "<div class=modal-header><button type=button class=close aria-label=ctrl.Close ng-click=Ok()><span aria-hidden=true>&times;</span></button><h4 class=modal-title>{{params.title}}</h4></div><div class=modal-body><p>{{params.message}}</p></div><div class=modal-footer><button type=button class=\"btn btn-primary\" ng-click=Ok()>OK</button></div>");
  $templateCache.put("/jjp/pf/passwordform.html",
    "<form name=form><fieldset><legend>{{::s.meta.header}}</legend><pf-password title={{::s.oldpassword.title}} ng-model=ngModel[s.oldpassword.model] ng-required=1>{{::s.oldpassword.help}}</pf-password><pf-password title={{::s.newpassword.title}} ng-model=ngModel[s.newpassword.model] ng-required=1>{{::s.newpassword.help}}</pf-password><pf-password title={{::s.confirmPassword.title}} ng-model=ngModel[s.confirmPassword.model] ng-required=1 confirm=ngModel[s.newpassword.model]>{{::s.confirmPassword.help}}</pf-password><span ng-transclude>&nbsp;</span> <button type=submit class=\"btn btn-primary btn-block\" ng-disabled=form.$invalid>{{::s.meta.submit}}</button></fieldset></form>");
  $templateCache.put("/jjp/pf/loginform.html",
    "<form name=form><fieldset><legend>{{::s.meta.header}}</legend><pf-email title={{::s.username.title}} ng-model=ngModel[s.username.model] ng-required=1 ng-if=s.meta.emailOnly placeholder={{::s.username.placeholder}}>{{::s.username.help}}</pf-email><pf-text title={{::s.username.title}} ng-model=ngModel[s.username.model] ng-required=1 ng-if=!s.meta.emailOnly placeholder={{::s.username.placeholder}}>{{::s.username.help}}</pf-text><pf-password title={{::s.password.title}} ng-model=ngModel[s.password.model] ng-required=1>{{::s.password.help}}</pf-password><span ng-transclude>&nbsp;</span> <button type=submit class=\"btn btn-primary btn-block\" ng-disabled=form.$invalid>{{::s.meta.submit}}</button></fieldset></form>");
  $templateCache.put("/jjp/pf/registerform.html",
    "<form name=form><fieldset><legend>{{::s.meta.header}}</legend><pf-text title={{::s.firstname.title}} ng-model=ngModel[s.firstname.model] ng-required=1 placeholder={{::s.firstname.placeholder}}>{{::s.firstname.help}}</pf-text><pf-text title={{::s.lastname.title}} ng-model=ngModel[s.lastname.model] ng-required=1 placeholder={{::s.lastname.placeholder}}>{{::s.lastname.help}}</pf-text><pf-email title={{::s.email.title}} ng-model=ngModel[s.email.model] ng-required=1>{{::s.email.help}}</pf-email><pf-password title={{::s.password.title}} ng-model=ngModel[s.password.model] ng-required=1>{{::s.password.help}}</pf-password><pf-password title={{::s.confirmPassword.title}} ng-model=ngModel[s.confirmPassword.model] ng-required=1 confirm=ngModel[s.password.model]>{{::s.confirmPassword.help}}</pf-password><span ng-transclude>&nbsp;</span> <button type=submit class=\"btn btn-primary btn-block\" ng-disabled=form.$invalid>{{::s.meta.submit}}</button></fieldset></form>");
}]);

(function(pf, undefined) {
  'use strict';
  /** Polyfill for string ops */
  pf.startsWith = function(str, val) {
    return str.substring(0, val.length) === val;
  };
  /** Polyfill for string ops */
  pf.endsWith = function(str, val) {
    return str.substring(str.length - val.length, str.length) === val;
  };

  /** Main angular modules */
  pf.module = angular.module('jjp.practical-forms', ['jjp.practical-forms.templates', 'ui.bootstrap', 'ngAria', 'ngMessages']);

  /** A basic controller for the modal popups */
  pf.module.controller('pfModalCtrl', ['$scope', '$uibModalInstance', 'params', function($scope, $uibModalInstance, params) {
    $scope.params = params;
    $scope.Ok = function() {
      $uibModalInstance.close();
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }]);


  /**
   * Function to detect if element has transcluded elements
   * @param element Angular.element / jQuery element to detect
   */
  pf.hasTransclude = function(element) {
    var e = element.find('p').html();
    if (e === undefined) {
      return false;
    }
    var hasTransclude = (e.length > 0);
    return hasTransclude;
  };

  /** Set the dirty flage when ever the modelValue changes */
  pf.setDirty = function(modelValue, prevValue, form) {
    if (modelValue !== prevValue && modelValue !== '') {
      form.subform.name.$setDirty();
    }
  };

  /**
   * Generate id for elements using GUID like string
   * {@link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript}
   */
  pf.gerenateId = function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  };

  pf.valOrDefault = function(val, def) {
    return (val === '' || val === undefined) ? def : val;
  };

  /**
   * Gets the valus (or defaults) for the form information
   * @param opts {object} The options object from the binded properties
   * @param header {string} The form header string, i.e. "Personal Infromation"
   * @param submit {string} The submit button text, i.e. "Submit"  
   */
  pf.formOptions = function(opts, header, submit) {
    var meta = opts.meta || {} ;
    return {
      header: pf.valOrDefault(meta.header, header),
      submit: pf.valOrDefault(meta.submit, submit),
    };
  };

  /** 
   * Get the values (or defaults) for all of the data for a form input
   * @param opt {object} The current options object
   * @param name {string} The name of the form input, i.e. "firstname"
   * @param title {string} The displayed name of the input, i.e. "First Name"
   * @param help {string} The help text of the input i.e. "Your first name"
   * @param pl {string} The placeholder of the input i.e. "Ex. John Doe"
   */
  pf.vORdInput = function(opts, name, title, help, pl) {
    var prop = opts[name] || {};
    return {
      title: pf.valOrDefault(prop.title, title),
      model: pf.valOrDefault(prop.model, name),
      help: pf.valOrDefault(prop.help, help),
      placeholder: pf.valOrDefault(prop.placeholder, pl),
    };
  };

  pf.VERSION = '1.1.1';

} (window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfCheckbox', function() {
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
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.ngRequired = scope.ngRequired || false;
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfEmail', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngTrim: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/email.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfGroup', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        description: '@?',
      },
      transclude: true,
      replace: true,
      templateUrl: '/jjp/pf/group.html',
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive('pfNumber', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        max: '=?',
        min: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/number.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

  practicalForms.module.directive('pfNumberMask', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: false,

      link: function(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function(inputValue) {
          return inputValue;
        });

        ctrl.$parsers.push(function(value) {
          var p = value || 0;
          if (typeof p !== 'number') {
            if (value.length === 0) {
              value = 0;
            } else {
              p = parseFloat(value);
            }
            if (p !== ctrl.$viewValue) {
              ctrl.$setViewValue(p);
              ctrl.$render();
            }
          }
          return p;
        });
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function( practicalForms, undefined ) {
  'use strict';
  practicalForms.module.directive('pfPassword', function(){
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: '=?',
        ngRequired:'=?',
        confirm: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/password.html',
      link: function(scope, element){
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
        if('confirm' in scope){
          scope.subform.name.$validators.confirm = function(modelValue) {
            if (!modelValue) { return false; }
            return modelValue === scope.confirm;
          };
        }
      }
    };
  });


}( window.practicalForms = window.practicalForms || {} ));

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

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfPercentage', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/percentage.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

  practicalForms.module.directive('pfPercentageMask', function() {
    return {
      restrict: 'A',
      require: 'ngModel',

      link: function(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function(inputValue) {
          return (new practicalForms.Percentage(inputValue)).pretty();
        });

        ctrl.$parsers.push(function(value) {
          var p = new practicalForms.Percentage(value);
          if (p.pretty() !== ctrl.$viewValue) {
            ctrl.$setViewValue(p.pretty());
            ctrl.$render();
          }

          // Sets the validation
          if ((p.value() >= 0) && (p.value() <= 100)) {
            ctrl.$setValidity('percent', true);
          } else {
            ctrl.$setValidity('percent', false);
          }
          return p.value();
        });
      }
    };
  });

  practicalForms.Percentage = function(s) {
    s = String(s);
    // determine if the string has % & the value doesn't end with %;
    var needBackspace = (s.indexOf('%') < 0) && (!practicalForms.endsWith(s, '%'));
    //Remove the leading zeros
    var trimedValue = s.replace(/^0*/, '');
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
    if (this.value() > 9) {
      return this.value() + ' %';
    } else {
      return '0' + this.value() + ' %';
    }
  };

  practicalForms.Percentage.prototype.backspace = function() {
    // Used to delete the last number of the val;
    // Useful for binding to form when you only have a pretty value
    this._value = this._value.slice(0, this._value.length - 1);
  };

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfPhone', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/phone.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  /*
   * Single Picture Uploader
   * Provides a preview of the image before uploading
   *
   */
  practicalForms.module.factory('jjp.FileObject', [
    '$q',
    function($q) {
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

      return FileObject;
    }
  ]);

  practicalForms.module.directive('pfPictureUploader', function() {
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
        ngRequired: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/picture.html',

      link: function(scope, element) {
        angular.element(element[0].querySelector('.file-selector')).bind('click', function() {
          element[0].querySelector('input').click();
        });
        angular.element(element[0].querySelector('input')).bind('change', function(e) {
          if (typeof((e.srcElement || e.target).files[0]) !== 'undefined') {
            scope.$apply(function() {
              scope.ngModel = (e.srcElement || e.target).files[0];
              scope.Select();
            });
          }
        });
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      },

      controller: [
        '$scope',
        '$http',
        'jjp.FileObject',
        function($scope, $http, FileObject) {

          $scope.Select = function() {
            $scope.status = 1;
            if ($scope.ngModel.size > $scope.size) {
              $scope.status = -10;
              $scope.result = 'Image is too Big!';
              return;
            }
            FileObject.ReadImage($scope.ngModel).then(function(result) {
              $scope.preview = result;
              $scope.status = 2;
            }, function(error) {
              $scope.status = -1;
              $scope.result = error;
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
            });
          };

          $scope.Remove = function() {
            $scope.ngModel = null;
            $scope.preview = null;
            $scope.status = 0;
          };

          $scope.CanUpload = function() {
            var urlPattern = new RegExp('^(ht|f)tp(s?)\:\/\/(([a-zA-Z0-9\-\._]+(\.[a-zA-Z0-9\-\._]+)+)|localhost)(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?([\d\w\.\/\%\+\-\=\&amp;\?\:\\\&quot;\'\,\|\~\;]*)$');
            return urlPattern.test($scope.url);
          };

          // maxSize or 3MB
          $scope.size = $scope.maxSize || 3000000;
          $scope.ngModel = {};
          $scope.status = 0;
          $scope.result = {};
          $scope.showPreview = 0;
          $scope.showUpload = $scope.CanUpload();
        }
      ]
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfRadio', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        value: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?'
      },
      transclude: true,
      replace: true,
      templateUrl: '/jjp/pf/radio.html',
      link: function(scope, element, attrs) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.ngRequired = scope.ngRequired || false;
        scope.check = scope.ngRequired;
        scope.name = attrs.ngModel;
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
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
    'vi': 'virgin islands'
  };

  practicalForms.module.directive('pfState', function() {
    return {
      require: [
        'ngModel', '^form'
      ],
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        output: '@'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/state.html',
      link: function(scope, element) {
        //TODO: See below
        // link: function(scope, element, attributes, ctrls) {
        scope.id = practicalForms.gerenateId();
        var output = scope.output || 'code';
        scope.hasTransclude = practicalForms.hasTransclude(element);
        // TODO: test to see if this line is needed!
        // var ngModel = ctrls[0];

        scope.subform.name.$validators.stateCode = function(modelValue) {
          if (!modelValue) {
            return false;
          } else {
            return modelValue.toLowerCase() in STATES;
          }
        };

        scope.subform.name.$parsers.push(function(viewValue) {
          viewValue = viewValue.toLowerCase();
          if (viewValue in STATES) {
            if (output === 'code') {
              return viewValue.length === 2 ? viewValue : STATES[viewValue];
            } else {
              return viewValue.length === 2 ? STATES[viewValue] : viewValue;
            }
          } else {
            return undefined;
          }
        });

        scope.$watch('subform.name.$modelValue', function(modelValue, prevValue, form) {
          if (modelValue !== prevValue && modelValue !== '') {
            form.subform.name.$setDirty();
          }
        });
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function( practicalForms, undefined ) {
  'use strict';
  /**
   * Text input that has basic validation
   */
  practicalForms.module.directive('pfText', function(){
    return {
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel : '=',
        required: '=?',
        ngRequired:'=?'
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/text.html',
      link: function(scope, element){
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}( window.practicalForms = window.practicalForms || {} ));

(function(practicalForms, undefined) {
  'use strict';
  /**
   * Text area input
   */
  practicalForms.module.directive('pfTextarea', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        placeholder: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngMinlength: '=?',
        ngMaxlength: '=?',
        ngPattern: '@?',
        ngTrim: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/textarea.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfUrl', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngTrim: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/url.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  /**
   * Input for entering numbers
   */
  practicalForms.module.directive('pfZip', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngTrim: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/zipcode.html',
      link: function(scope, element) {
        scope.id = practicalForms.gerenateId();
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';

  practicalForms.module.directive('pfConfirm', [
    '$uibModal',
    function($uibModal) {
      return {
        restrict: 'A',
        scope: {
          pfTitle: '@',
          pfMessage: '@',
          pfConfirm: '&',
          modalOptions: '=?'
        },
        link: function($scope, $element) {
          $element.bind('click', function() {
            $scope.modalOptions = $scope.modalOptions || {};
            $scope.modalOptions.templateUrl = $scope.modalOptions.templateUrl || '/jjp/pf/confirm.html';
            $scope.modalOptions.controller = $scope.modalOptions.controller || 'pfModalCtrl';
            $scope.modalOptions.resolve = {
              params: {
                title: $scope.pfTitle || 'Are you sure?',
                message: $scope.pfMessage || 'Please confirm this action!'
              }
            };

            $uibModal.open($scope.modalOptions).result.then(function() {
              $scope.pfConfirm();
            });
          });
        }
      };
    }
  ]);
}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';
  practicalForms.module.directive('pfDate', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        format: '@?',
        minDate: '=?',
        datepickerOptions: '=?'
      },
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/date.html',
      link: function(scope, element) {
        if (typeof scope.minDate !== 'undefined') {
          scope.datepickerOptions.minDate = scope.minDate;
        }
        scope.hasTransclude = practicalForms.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', practicalForms.setDirty);
      }
    };
  });

}(window.practicalForms = window.practicalForms || {}));

(function(practicalForms, undefined) {
  'use strict';

  practicalForms.module.directive('pfInfo', [
    '$uibModal',
    function($uibModal) {
      return {
        restrict: 'A',
        scope: {
          pfTitle: '@',
          pfMessage: '@',
          modalOptions: '=?'
        },
        link: function($scope, $element) {
          $element.bind('click', function() {
            $scope.modalOptions = $scope.modalOptions || {};
            $scope.modalOptions.templateUrl = $scope.modalOptions.templateUrl || '/jjp/pf/info.html';
            $scope.modalOptions.controller = $scope.modalOptions.controller || 'pfModalCtrl';
            $scope.modalOptions.resolve = {
              params: {
                title: $scope.pfTitle || 'Information',
                message: $scope.pfMessage || 'Here is some more info for you'
              }
            };
            $uibModal.open($scope.modalOptions);
          });
        }
      };
    }
  ]);
}(window.practicalForms = window.practicalForms || {}));

(function(pf, undefined) {
  'use strict';

  function parseSettings(opt) {
    opt = opt || { meta: {} };
    return {
      meta: pf.formOptions(opt, 'Change Password', 'Submit'),
      oldpassword: pf.vORdInput(opt, 'oldpassword', 'Old Password', '', ''),
      newpassword: pf.vORdInput(opt, 'newpassword', 'New Password', '', ''),
      confirmPassword: pf.vORdInput(opt, 'confirmPassword', 'Confirm Password', '', ''),
    };
  }
  pf.module.directive('pfFormPassword', function() {
    return {
      scope: {
        ngModel: '=',
        ngSubmit: '&',
        settings: '=?',
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/passwordform.html',
      link: function(scope, element) {
        scope.s = parseSettings(scope.settings);
        scope.hasTransclude = pf.hasTransclude(element);
      }
    };
  });

} (window.practicalForms = window.practicalForms || {}));

(function(pf, undefined) {
  'use strict';

  function parseOpts(opts) {
    opts = opts || { meta: {} };
    var settings = {
      meta: pf.formOptions(opts, 'Login', 'Login'),
      username: pf.vORdInput(opts, 'username', 'Username', '', 'Ex. johndoe2'),
      password: pf.vORdInput(opts, 'password', 'Password', '', ''),
    };
    settings.meta.emailOnly = pf.valOrDefault(opts.meta.emailOnly, false);
    return settings;
  }

  pf.module.directive('pfFormLogin', function() {
    return {
      scope: {
        ngModel: '=',
        ngSubmit: '&',
        settings: '=?'
      },
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/loginform.html',
      link: function(scope, element) {
        scope.s = parseOpts(scope.settings);
        scope.hasTransclude = pf.hasTransclude(element);
      }
    };
  });

} (window.practicalForms = window.practicalForms || {}));

(function(pf, undefined) {
  'use strict';

  function parseOpts(opts) {
    opts = opts || {};
    return {
      meta: pf.formOptions(opts, 'Register', 'Create Account'),
      firstname: pf.vORdInput(opts, 'firstname', 'First Name', '', 'Ex. John'),
      lastname: pf.vORdInput(opts, 'lastname', 'Last Name', '', 'Ex. Doe'),
      email: pf.vORdInput(opts, 'email', 'Email', '', 'Ex. john.doe@someplace.com'),
      password: pf.vORdInput(opts, 'password', 'Password', '', ''),
      confirmPassword: pf.vORdInput(opts, 'confirmPassword', 'Confirm Password', '', ''),
    };
  }
  pf.module.directive('pfFormRegister', function() {
    return {
      scope: {
        ngModel: '=',
        ngSubmit: '&',
        settings: '=?'
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/registerform.html',
      link: function(scope, element) {
        scope.s = parseOpts(scope.settings);
        scope.hasTransclude = pf.hasTransclude(element);
      }
    };
  });

} (window.practicalForms = window.practicalForms || {}));
