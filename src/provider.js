(function(pf, angular, undefined) {
  'use strict';

  angular.module('jjp.practical-forms')

  .provider('pfConfig', function() {
    function Config(config) {
      angular.extend(this, config);
    }
    Config.prototype.baseDirective = function (name, scopeVars, linkCallback) {
      var _this = this;
      var directive = {
        scope: {
          title: '@',
          placeholder: '@?',
          ngModel: '=',
          required: '=?',
          ngRequired: '=?',
          ngDisabled: '=?',
          pfConfig: '=?'
            //TODO: Add full suport for these options
            // ngMinlength: '=?',
            // ngMaxlength: '=?',
            // ngPattern: '@?',
            // ngTrim: '=?'
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: '/jjp/pf/' + name + '.html',
        link: function(scope, element, attrs) {
          _this.baseLinkFunc(scope, element, attrs, linkCallback);
        }
      };
      if(typeof scopeVars === 'object') {
        angular.extend(directive.scope, scopeVars);
      }
      return directive;
    };
    Config.prototype.baseLinkFunc = function (scope, element, attrs, linkCallback) {
      var _this = this;
      scope.id = this.gerenateId();
      scope.hasTransclude = this.hasTransclude(element);
      scope.$watch('subform.name.$modelValue', _this.setDirty);
      scope.config = angular.merge({}, _this, scope.pfConfig);

      if(linkCallback){
        linkCallback(scope, element, attrs);
      }
    };

    Config.prototype.valOrDefault = function(val, def) {
      return (val === '' || val === undefined) ? def : val;
    };

    Config.prototype.parseModelOptions = function(typeOpts, custOpts) {
      var defaultOptions = {
        templateUrl: '/jjp/pf/confirm.html',
        controller: 'pfModalCtrl',
        resolve: {
          params: {
            title: 'Modal Title',
            message: 'Modal Body'
          },
          data: {}
        }
      };
      return angular.merge({}, defaultOptions, typeOpts, custOpts);
    };

    /**
     * Function to detect if element has transcluded elements
     * @param element Angular.element / jQuery element to detect
     */
    Config.prototype.hasTransclude = function(element) {
      var e = element.find('p').html();
      return e && (e.length > 0);
    };

    /**
     * Generate id for elements using GUID like string
     * {@link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript}
     */
    Config.prototype.gerenateId = function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    /** Set the dirty flage when ever the modelValue changes */
    Config.prototype.setDirty = function(modelValue, prevValue, form) {
      if (modelValue !== prevValue && modelValue !== '') {
        form.subform.name.$setDirty();
      }
    };

    var _config = {
      /** the character or pharse that marks an input as required */
      requiredChar: '*',
      validation: {
        /** various regex patterns that are used to validate inputs. These are Regex objects!*/
        patterns: {
          /** The password validation: @see: http://regexlib.com/REDetails.aspx?regexp_id=1923 */
          password: /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/,

          /** The phone number validation: @see: http://regexlib.com/REDetails.aspx?regexp_id=607 */
          phone:  /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/,

          /** The zip code validation: @see: http://regexlib.com/REDetails.aspx?regexp_id=837 */
          zipcode: /^\d{5}(-\d{4})?$/

        },
        /** These are the human readiable validation label show to the user */
        labels: {
          valid: 'All Good!',
          required: 'This input is required',
          minlength: 'Text must be between 0 and 255 characters',
          maxlength: 'Text must be between 0 and 255 characters',
          email: 'This does not seem to be a valid email',
          number: 'That is not a number',
          max: 'Numbers must be less then {{max}}',
          min: 'Numbers must be greater then {{min}}',
          confirm: 'The confirmation password does not match the original',
          pattern: 'Text is invalid',
          percent: 'Value must be between 0% and 100%',
          stateCode: 'State is Invalid. Please enter the state name or 2 letter code',
          password: 'The password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 digit',
          phone: 'This does not seem to be valid phone number',
          url : 'Not a valid URL. Make sure it starts with "http://"',
          zipcode: 'Invalid Zip Code. Plase enter the 5 digit zip code'
        }
      },
    };

    this.setConfig = function(config) {
      _config = angular.merge({}, _config, config);
    };

    this.$get = [function() {
      return new Config(_config);
    }];

  })

  /** A basic controller for the modal popups */
  .controller('pfModalCtrl', ['$scope', '$uibModalInstance', 'params', 'data', function($scope, $uibModalInstance, params, data) {
    $scope.params = params;
    $scope.data = data;
    $scope.Ok = function() {
      $uibModalInstance.close();
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
}(window.practicalForms = window.practicalForms || {}, window.angular));
