(function(pf, angular, undefined) {
  'use strict';

  pf.module.provider('pfConfig', function() {
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
      return _config;
    }];
  });
}(window.practicalForms = window.practicalForms || {}, window.angular));
