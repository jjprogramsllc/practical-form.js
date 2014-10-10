/*
 * Basic form input that has basic validation
 * Uses basic angular form directives
 *
 */

module.directive("pfPercentageInput", function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      placeholder: '@?',
      ngModel : '=',
      required: "=?",
      ngRequired:"=?"
    },
    replace: true,
    transclude: true,
    templateUrl: '/jjp/pf/percentage.html',
  };
});


module.directive("pfPercentageMask", function(){
  return {
    restrict: 'A',
    require: 'ngModel',

    link: function(scope, element, attrs, ctrl) {
      ctrl.$formatters.push(function(inputValue){
        return new Percentage(inputValue).pretty();
      });

      // For angular 1.3
      // ctrl.$validators.validPercent = function(modelValue, viewValue) {
      //   console.log(modelValue, viewValue);
      //   return (modelValue >= 0) && (modelValue <= 100);
      // };

      ctrl.$parsers.push(function(value) {
        var p = new Percentage(value);
        if(value.indexOf("%") < 0 &&  !value.endsWith('%')){
          // The % was deleted, so delete the last number
          p.backspace();
        }
        // console.log(value, ctrl.$viewValue, p.value(), p.pretty());
        //Update the new value if it has changed
        if(p.pretty() != ctrl.$viewValue){
          ctrl.$setViewValue(p.pretty());
          ctrl.$render();
        }

        // Sets the validation
        if((p.value() >= 0) && (p.value() <= 100)){
          ctrl.$setValidity('percent', true);
        }else{
          ctrl.$setValidity('percent', false);
        }
        return String(p.value());
      });
    }
  };
});

function Percentage(s){
  //Remove the leading zeros
  var trimedValue = String(s).replace(/^0*/, '');
  //only return the numbers
  this.val = trimedValue.replace(/[^0-9]/g, '');
}

Percentage.prototype.value = function(){
  return parseFloat(this.val) || 0;
};
Percentage.prototype.pretty = function(){
  if(this.value() > 9)
    return this.value() + " %";
  else
    return "0" + this.value() + " %";
};
Percentage.prototype.backspace = function(){
  //Used to delete the last number of the val;
  // Useful for binding to form when you only have a pretty value
  this.val = this.val.slice(0, this.val.length -1);
};
