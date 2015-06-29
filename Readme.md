About
===========================================
This repo is a collection of form components that are to help with making practical forms.

* Angular is great at validating forms
* Bootstrap is great at styling forms
* They work great together
* But, it is missing many everyday form components

This repo aims to help fix that problem by making directives for common form inputs, such state code or phone numbers. These form inputs are client validated so the use will get instant feedback, very popular for todays form.


Form Input Included
==============================================
_Note: The form elements are US validated_
* Text
* Text-area
* Number
* Percentage
* Email
* Password
* Website / URL
* Phone number (US)
* State
* Zip Code
* Radio Buttons Groups
* Check-box Groups
* Date picker ( UI.Bootstrap required)
* Confirm Dialogue ( UI.Bootstrap required)

Examples
======================================================
* Check out the examples folder for a basic example for each form component


Installation
======================================================
* This depends on AngularJS, Bootstrap & UI.Bootstrap, Please include these first
* Include the compiled file
      <script src="path/practicalforms.js"></script>
* Add the module as a dependence of the angular app
      angular.modular("app", ['ui.bootstrap', 'PractialForms']);
* Add the directive to the form
      <pf-email-input ng-model="data.email"></pf-email-input>
_See the example folder for a nice list of all components_

Issues
=======================================================
* If you have issues, please report them. I will be more encourage to develop this further if there is activity.
* Tested 1.2 & 1.3 version of angular.js. If there are errors with early/later version, submit an issues or patch.


License & Contributing
=======================================================
* This code is distributed under the MIT License. Use it how ever you need, please give us credit though.
* Feel free to fork this repo and help add/modify components. Pull request are welcome!
* (c) 2014, [JJ Programc, LLC](http://jjprograms.com)
