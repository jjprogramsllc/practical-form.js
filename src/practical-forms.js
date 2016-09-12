(function(angular, undefined) {
  'use strict';

  /*jshint freeze:false */
  /** Polyfill for string ops */
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
  }
  /** jshint enable */

  /** All of the config options for practical forms and the default values */
  var _config = {
    /** the character or pharse that marks an input as required */
    requiredChar: '*',
    validation: {
      /** various regex patterns that are used to validate inputs. These are Regex objects!*/
      patterns: {
        /** The password validation: @see: http://regexlib.com/REDetails.aspx?regexp_id=1923 */
        password: /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/,

        /** The phone number validation: @see: http://regexlib.com/REDetails.aspx?regexp_id=607 */
        phone: /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/,

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
        url: 'Not a valid URL. Make sure it starts with "http://"',
        zipcode: 'Invalid Zip Code. Plase enter the 5 digit zip code'
      }
    },
  };

  /**
   * This is the practical forms configurataion object
   * There are a bunch of helper methods that help with code reuse on the the directives
   *
   * @param config {object} A object that has all of the configurataion options
   */
  function Config(config) {
    angular.extend(this, config);
  }
  Config.prototype.baseFormDirective = function(name, scopeVars, parseOpts) {
    var _this = this;
    var directive = {
      scope: {
        ngModel: '=',
        ngDisabled: '=?',
        ngSubmit: '&',
        settings: '=?'
      },
      require: '^form',
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/jjp/pf/' + name + 'form.html',
      link: function(scope, element) {
        scope.hasTransclude = _this.hasTransclude(element);
        scope.s = parseOpts(scope.settings);
      }
    };
    if (typeof scopeVars === 'object') {
      angular.extend(directive.scope, scopeVars);
    }
    return directive;
  };

  /**
   * Gets the valus (or defaults) for the form information
   * @param opts {object} The options object from the binded properties
   * @param header {string} The form header string, i.e. "Personal Infromation"
   * @param submit {string} The submit button text, i.e. "Submit"
   */
  Config.prototype.formOptions = function(opts, header, submit) {
    var _this = this;
    var meta = opts.meta || {};
    return {
      header: _this.valOrDefault(meta.header, header),
      submit: _this.valOrDefault(meta.submit, submit)
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
  Config.prototype.vORdInput = function(opts, name, title, help, pl) {
    var _this = this;
    var prop = opts[name] || {};
    return {
      title: _this.valOrDefault(prop.title, title),
      model: _this.valOrDefault(prop.model, name),
      help: _this.valOrDefault(prop.help, help),
      placeholder: _this.valOrDefault(prop.placeholder, pl)
    };
  };
  Config.prototype.baseDirective = function(name, scopeVars, linkCallback) {
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
    if (typeof scopeVars === 'object') {
      angular.extend(directive.scope, scopeVars);
    }
    return directive;
  };
  Config.prototype.baseLinkFunc = function(scope, element, attrs, linkCallback) {
    var _this = this;
    scope.id = this.gerenateId();
    scope.hasTransclude = this.hasTransclude(element);
    scope.$watch('subform.name.$modelValue', _this.setDirty);
    scope.config = angular.merge({}, _this, scope.pfConfig);

    if (linkCallback) {
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



  /** Main angular modules */
  angular.module('jjp.practical-forms', ['jjp.practical-forms.templates', 'ui.bootstrap', 'ngAria', 'ngMessages'])
  .provider('pfConfig', function() {
    /** Set the config object */
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

}(window.angular));
