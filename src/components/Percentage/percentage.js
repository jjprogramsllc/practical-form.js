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
        return new PraticalForms.Percentage(inputValue).pretty();
      });

      ctrl.$parsers.push(function(value) {
        var p = new PraticalForms.Percentage(value);
        // if(value.indexOf("%") < 0 &&  !value.endsWith('%')){
        //   // The % was deleted, so delete the last number
        //   p.backspace();
        // }
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

(function( PraticalForms, undefined ) {

  PraticalForms.Percentage = function(s){
    // determine if the string has % & the value doesn't end with %;
    var neededBackspace = (s.indexOf("%") < 0) && (!PraticalForms.endsWith(s, '%'));
    //Remove the leading zeros
    var trimedValue = String(s).replace(/^0*/, '');
    //only return the numbers
    this._value = trimedValue.replace(/[^0-9]/g, '');
    this.backspace();
  };

  PraticalForms.Percentage.prototype.value = function(){
    return parseFloat(this._value) || 0;
  };

  PraticalForms.Percentage.prototype.pretty = function(){
    //Adds a leading zero to the front of the singel digit precents: 01%
    if(this.value() > 9)
      return this.value() + " %";
    else
      return "0" + this.value() + " %";
  };

  PraticalForms.Percentage.prototype.backspace = function(){
    // Used to delete the last number of the val;
    // Useful for binding to form when you only have a pretty value
    this._value = this._value.slice(0, this._value.length -1);
  };

  PraticalForms.startsWith = function( str, val ) {
    return str.substring( 0, val.length ) === val;
  };

  PraticalForms.endsWith = function( str, val ) {
    return str.substring( str.length - val.length, str.length ) === val;
  };

}( window.PraticalForms = window.PraticalForms || {} ));
