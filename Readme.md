PracticalForms.js
==============================================
*Practical, Validated, and Accessible Form Inputs, Built in and for United States web developers*

About / Why?
-----------------------------------------------
This repo is a collection of form components that are to help with making practical forms.

* Angular is great at validating forms
* Bootstrap is great at styling forms
* They work great together
* But, it is missing many everyday form components that are needed
* Also, we need an accessible form library.

This repo aims to help fix that problem by making directives for common form inputs, such state code or phone numbers. These form inputs are client validated so the use will get instant feedback, very popular for todays form. Also, they have special consideration for accessibility baked in!

Accessibility
-----------------------------------------------
One of the goals for this project is to make the forms accessible out of the box with no additional development required. This is done by careful design of the forms and use of the ngAria library.

* Color blind visuals on inputs
* Proper labeling for screen readers
* On form validation labeling

*Now I am not an expert in accessibility, so I made have missed something, please let me know.*

Form Input Included
-----------------------------------------------
_Note: The form elements are for a US location_
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


Examples
-----------------------------------------------
* Look at this website: http://jjprogramsllc.github.io/practical-form.js/
* Check out the examples folder for a basic example for each form component


Installation
-----------------------------------------------
* This depends on AngularJS, ngAria, ngMessages, Bootstrap, & UI.Bootstrap, Please include these first
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
* Add the directive to the form
```HTML
<pf-email ng-model="data.email"></pf-email>
```
* It is suggested to include these styles in your style sheet
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
There is not to much to document. But here are a few points:
* Every input has these attributes
    * `title`: The name of the input
    * `placeholder`: Sets the form placeholder
    * `ngModel`: The angular model to bind to,
    * `required`: Determines if the input is required, default false. _standard HTML style_
    * `ngRequired`: Determines if the input is required, default false. _standard angular style_
* Every input has a transculde property so some help text can be set (actually anything can be set there)
* The forms are just grouped collections of inputs with some default options
* The best thing is to look at the examples, they should illustrate all of the abilities

Custom Builds
-----------------------------------------------
Custom builds are not configured, but totally possible with grunt. Each form component is independent, the only require file in the `src/practical-forms.js` file. Grunt just concats all of the files together, so if you clone the repo and remove a component folder, it is gone. Custom build done!

_You could use this method to easily remove the dependency on ui.boostrap_

Issues
-----------------------------------------------
* If you have issues, please report them. I will be more encourage to develop this further if there is activity.
* Tested 1.2 - 1.5 version of angular.js. If there are errors with early/later version, submit an issues or patch.


License & Contributing
-----------------------------------------------
* This code is distributed under the MIT License. Use it how ever you need, please give us credit though.
* Feel free to fork this repo and help add/modify components. Pull request are welcome!
* (c) 2014, [JJ Programc, LLC](http://jjprograms.com)
