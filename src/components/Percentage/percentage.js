(function(angular) {
  'use strict';

  var Percentage = function(s) {
    s = String(s);
    // determine if the string has % & the value doesn't end with %;
    var needBackspace = (s.indexOf('%') < 0) && (!s.endsWith('%'));
    //Remove the leading zeros
    var trimedValue = s.replace(/^0*/, '');
    //only return the numbers
    this._value = trimedValue.replace(/[^0-9]/g, '');
    if (needBackspace) {
      this.backspace();
    }
  };
  Percentage.prototype.value = function() {
    return parseFloat(this._value) || 0;
  };
  Percentage.prototype.pretty = function() {
    //Adds a leading zero to the front of the singel digit precents: 01%
    if (this.value() > 9) {
      return this.value() + ' %';
    } else {
      return '0' + this.value() + ' %';
    }
  };
  Percentage.prototype.backspace = function() {
    // Used to delete the last number of the val;
    // Useful for binding to form when you only have a pretty value
    this._value = this._value.slice(0, this._value.length - 1);
  };

  angular.module('jjp.practical-forms')

  .directive('pfPercentage', ['pfConfig', function(pfConfig) {
    return pfConfig.baseDirective('percentage');
  }])

  .directive('pfPercentageMask', function() {
    return {
      restrict: 'A',
      require: 'ngModel',

      link: function(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function(inputValue) {
          return (new Percentage(inputValue)).pretty();
        });

        ctrl.$parsers.push(function(value) {
          var p = new Percentage(value);
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


}(window.angular));
