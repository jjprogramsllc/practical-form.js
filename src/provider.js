(function(pf, angular, undefined) {
  'use strict';

  pf.module.provider('pfConfig', function() {
    var _config = {
      validation: {
        /** These are the human readiable validation label show to the user */
        labels: {
          /** This is the label shown when an input is valid */
          valid: 'All Good!'
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
