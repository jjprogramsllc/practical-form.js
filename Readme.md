PracticalForms.js
==============================================
*Practial, Validated, and Accessible Form Inputs, Built in and for United States web developers*

About / Why?
-----------------------------------------------
This repo is a collection of form components that are to help with making practical forms.

* Angular is great at validating forms
* Bootstrap is great at styling forms
* They work great together
* But, it is missing many everyday form components that are need in the US
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
_Note: The form elements are US validated_
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
* Check out the examples folder for a basic example for each form component


Installation
-----------------------------------------------
* This depends on AngularJS, ngAria, ngMessages, Bootstrap, & UI.Bootstrap, Please include these first
* Include the compiled file
      <script src="path/practicalforms.js"></script>
* Add the module as a dependence of the angular app
      angular.modular("app", ['ui.bootstrap', 'PractialForms']);
* Add the directive to the form
      <pf-email ng-model="data.email"></pf-email>
_See the example folder for a nice list of all components and options_

Custom Builds
-----------------------------------------------
Custom builds are not configured, but totally possible with grunt. Each form component is independent, the only require file in the `src/practical-forms.js` file. Grunt just concats all of the files together, so if you clone the repo and remove a component folder, it is gone. Custom build done!

_You could use this method to easily remove the dependency on ui.boostrap_

Issues
-----------------------------------------------
* If you have issues, please report them. I will be more encourage to develop this further if there is activity.
* Tested 1.2 & 1.3 version of angular.js. If there are errors with early/later version, submit an issues or patch.


License & Contributing
-----------------------------------------------
* This code is distributed under the MIT License. Use it how ever you need, please give us credit though.
* Feel free to fork this repo and help add/modify components. Pull request are welcome!
* (c) 2014, [JJ Programc, LLC](http://jjprograms.com)
