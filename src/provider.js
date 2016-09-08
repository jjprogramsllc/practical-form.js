(function(pf, angular, undefined) {
  'use strict';

  pf.module.provider('pfConfig', function() {
    var _config = {
      /** the character or pharse that marks an input as required */
      requiredChar: '*',
      validation: {
        /** These are the human readiable validation label show to the user */
        labels: {
          valid: 'All Good!',
          required: 'This input is required',
          minlength: 'Text must be between 0 and 255 characters',
          maxlength: 'Text must be between 0 and 255 characters'
        }
      },
    };

    this.setConfig = function(config) {
      _config = angular.merge({}, _config, config);
    };

    this.$get = [function() {
      return _config;
    }];
  });
}(window.practicalForms = window.practicalForms || {}, window.angular));
