(function(pf, angular, undefined) {
  'use strict';

  pf.module.provider('pfConfig', function() {
    this.config = {
      validation: {
        showSuccessLables : true,
        successLabel: '--- Success Label Text ---'
      },
    };

    this.$get = [function() {
      return this.config;
    }];
  });
}(window.practicalForms = window.practicalForms || {}, window.angular));
