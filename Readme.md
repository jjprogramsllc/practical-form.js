PracticalForms.js
==============================================
*Practical, Validated, and Accessible Form Inputs, Built in and for United States web developers*

About / Why?
-----------------------------------------------
This project is a collection of form components that are helpful for building practical forms in angular projects.

* Angular is great at validating forms
* Bootstrap is great at styling forms
* They work great together
* But, it is missing many everyday form components
* Also, we need an accessible form library.

This project aims to help fix this problem by making directives for common form inputs, such states or phone numbers. These form inputs are client validated so the user will get instant feedback, very popular for todays form. Also, they have special consideration for accessibility baked in!

Accessibility
-----------------------------------------------
One of the goals for this project is to make the forms accessible out of the box. This proper form design and use of the ngAria library.

* Color blind visuals on inputs
* Proper labeling for screen readers
* On form validation labeling

*Now I am not an expert in accessibility, so I made have missed something. If there are issues, please let me know.*

Form Input Included
-----------------------------------------------
_Note: The form elements are for US local_
* Text
* Text-area
* Number
* Percentage
* Email
* Password
* Website / URL
* Phone number
* State
* Zip Code
* Radio Buttons Groups
* Check-box Groups
* Date picker ( UI.Bootstrap required)
* Confirm Dialogue ( UI.Bootstrap required)
* Picture Preview & Uploader
* Login form
* Change Password Form
* Registration Form


Examples
-----------------------------------------------
* Look at this website: http://jjprogramsllc.github.io/practical-form.js/
* Check out the examples folder for basic examples for each form and component


Installation
-----------------------------------------------
* This depends on AngularJS, ngAria, ngMessages, Bootstrap (CSS), & UI.Bootstrap, Please include these first
```HTML
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular-aria.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.2/angular-messages.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.2.5/ui-bootstrap-tpls.min.js"></script>
```
* Include the compiled file
```HTML
<script src="path/practicalforms.js"></script>
```
* Add the module as a dependence of the angular app
```JavaScript
angular.modular("app", ['jjp.practical-forms']);
```
* Add the directives
```HTML
<pf-email ng-model="data.email"></pf-email>
```
* Suggested styles to include
```css
.pf-form-control {
  position: relative;
}
.pf-required {
  color: red;
}
```

Documentation
---------------------------------------------------------------------
There is not much to document. But here are a few points:
* Every input has these attributes
    * `title`: The name of the input
    * `placeholder`: Sets the form placeholder
    * `ngModel`: The angular model to bind to,
    * `required`: Determines if the input is required, default false. _standard HTML style_
    * `ngRequired`: Determines if the input is required, default false. _standard angular style_
* Every Form has these attributes
    * `ngModel`: The object to bind too
    * `ngDisabled`: Disabled the entire form _Note: You must add the ngDisabled attribute to the custom inputs on a pre built form_
    * `ngSubmit`: The function to call when the form is submitted
    * `settings`: An optional settings object to customized the form
* Modal inputs (Info and Confirm) can be customized using the `modalOptions` attribute.
  * [See UI Bootstrap Documentation](https://angular-ui.github.io/bootstrap/#/modal)
  * Custom templates can easily be use, when combined with the `resolve.data` makes thing fairly easy to use
  * The `resolve` property can contain any data that you wished to be passed to the modal. To support minification, we have set up the `resolve.data` attribute to be required.
  ```JavaScript
    var modalOptions = {
        resolve: {
          data: {} // <- Your custom data object here
        }
    }
  ```
* Every input has a transclude property so some help text can be set (actually anything can be set there)
* The forms are just grouped collections of inputs with some default options
* The best thing is to look at the examples, they should illustrate all the abilities

The form setting object of the following properties:
```JSON
{
  "meta": {
    "header": "{string} The text in the header of the form",
    "submit": "{string} The submit button text"
  },
 "[_inputname, one for each input_]": {
    "title": "{string} The displayed text of the label",
    "model": "{string} The property name to bind to",
    "help": "{string} Some descriptive help text placed under the label",
    "placeholder": "{string} The text in the placeholder on the form"
  },
}
```


Custom Builds
-----------------------------------------------
Custom builds are not configured, but totally possible with grunt. Each form component is independent, the only require file in the `src/practical-forms.js` file. Grunt just concats all of the files together, so if you clone the repo and remove a component folder, it is gone. Custom build done!

_You could use this method to easily remove the dependency on ui.bootstrap_

Issues
-----------------------------------------------
* If you have issues, please report them. I will be more encouraged to develop this further if there is activity.
* Tested 1.2 - 1.5 version of angular.js. If there are errors with early/later version, submit an issues or patch.


License & Contributing
-----------------------------------------------
* This code is distributed under the MIT License. Use it however you need, please give us credit though.
* Feel free to fork this repo and help add/modify components. Pull request are welcome!
* (c) 2016, [JJ Programs, LLC](http://jjprograms.com)
