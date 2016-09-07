(function (pf, angular, undefined) {
  'use strict';
  /** Polyfill for string ops */
  pf.startsWith = function (str, val) {
    return str.substring(0, val.length) === val;
  };
  /** Polyfill for string ops */
  pf.endsWith = function (str, val) {
    return str.substring(str.length - val.length, str.length) === val;
  };

  /** Main angular modules */
  pf.module = angular.module('jjp.practical-forms', ['jjp.practical-forms.templates', 'ui.bootstrap', 'ngAria', 'ngMessages']);

  /** A basic controller for the modal popups */
  pf.module.controller('pfModalCtrl', ['$scope', '$uibModalInstance', 'params', 'data', function ($scope, $uibModalInstance, params, data) {
    $scope.params = params;
    $scope.data = data;
    $scope.Ok = function () {
      $uibModalInstance.close();
    };
    $scope.Cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);

  pf.parseModelOptions = function (typeOpts, custOpts) {
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
  pf.hasTransclude = function (element) {
    var e = element.find('p').html();
    return e && (e.length > 0);
  };

  /** Set the dirty flage when ever the modelValue changes */
  pf.setDirty = function (modelValue, prevValue, form) {
    if (modelValue !== prevValue && modelValue !== '') {
      form.subform.name.$setDirty();
    }
  };

  /**
   * Generate id for elements using GUID like string
   * {@link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript}
   */
  pf.gerenateId = function () {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  pf.valOrDefault = function (val, def) {
    return (val === '' || val === undefined) ? def : val;
  };

  /**
   * Gets the valus (or defaults) for the form information
   * @param opts {object} The options object from the binded properties
   * @param header {string} The form header string, i.e. "Personal Infromation"
   * @param submit {string} The submit button text, i.e. "Submit"
   */
  pf.formOptions = function (opts, header, submit) {
    var meta = opts.meta || {};
    return {
      header: pf.valOrDefault(meta.header, header),
      submit: pf.valOrDefault(meta.submit, submit)
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
  pf.vORdInput = function (opts, name, title, help, pl) {
    var prop = opts[name] || {};
    return {
      title: pf.valOrDefault(prop.title, title),
      model: pf.valOrDefault(prop.model, name),
      help: pf.valOrDefault(prop.help, help),
      placeholder: pf.valOrDefault(prop.placeholder, pl)
    };
  };

  pf.baseDirective = function (name, config) {
    return {
      scope: {
        title: '@',
        placeholder: '@?',
        ngModel: '=',
        required: '=?',
        ngRequired: '=?',
        ngDisabled: '=?'
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
      link: function (scope, element) {
        scope.id = pf.gerenateId();
        scope.hasTransclude = pf.hasTransclude(element);
        scope.$watch('subform.name.$modelValue', pf.setDirty);
        scope.validation = (config || { validation: {successLabel : 'All Good!'}} ).validation ;
      }
    };
  };

  pf.VERSION = '2.3.0';

}(window.practicalForms = window.practicalForms || {}, window.angular));
