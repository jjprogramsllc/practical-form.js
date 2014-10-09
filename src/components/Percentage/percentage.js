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
    templateUrl: '/jjp/pf/text.html',
    require: 'ngModel',

    link: function(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function(inputValue){
            // Add the % symbol the firset time this is shown
            return inputValue + '%';
        });

        ctrl.$parsers.push(function(value) {
            console.log("Parseing: " , value)
            //clearing left side zeros
            while (value.charAt(0) == '0') {
                value = value.substr(1);
            }

            // Keep the precent sign with 1 number left, still somethign funny here
            if(value.length > 1 && value.indexOf("%") < 0){
              value = value.slice(0, value.length -1);
            }
            var v = value.replace("%", "");
            var newVal = v + "%";
            //Update the new value
            if(value){
              ctrl.$setViewValue(newVal);
              ctrl.$render();
            }
            return v;
        });

    }
  };
});
