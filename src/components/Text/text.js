(function(pf, undefined ) {
  'use strict';
  /**
   * Text input that has basic validation
   */
  pf.module.directive('pfText', ['pfConfig', function(pfConfig){
    console.log('ctrl', pfConfig );
    return pf.baseDirective('text', pfConfig);
  }]);

}( window.practicalForms ));
