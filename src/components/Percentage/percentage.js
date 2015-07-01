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
        scope.id = practicalForms.GerenateId();
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
