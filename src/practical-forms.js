(function( practicalForms, undefined ) {
  /** Polyfill for string ops */
  practicalForms.startsWith = function( str, val ) {
    return str.substring( 0, val.length ) === val;
  };
  /** Polyfill for string ops */
  practicalForms.endsWith = function( str, val ) {
    return str.substring( str.length - val.length, str.length ) === val;
  };

  /** Main angular modules */
  practicalForms.module = angular.module('jjp.practical-forms', ['jjp.practical-forms.templates', 'ui.bootstrap']);

  /**
   * Function to detect if element has transcluded elements
   * @param element Angular.element / jQuery element to detect
   */
  practicalForms.hasTransclude = function(element){
    var e = element.find('p').html();
    if(e === undefined){
      return false;
    }
    var hasTransclude = (e.length  > 0);
    return hasTransclude;
  };

  /** Set the dirty flage when ever the modelValue changes */
  practicalForms.setDirty = function(modelValue, prevValue, form) {
    if (modelValue !== prevValue && modelValue !== "") {
      form.subform.name.$setDirty();
    }
  };


}( window.practicalForms = window.practicalForms || {} ));
