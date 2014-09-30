## About ##
This repo is a collection of form components that are to help with making practical forms

* Angular is great at validating forms
* Bootstrap is great at styling forms
* They work get together
* But, it is missing many everyday form components

This repo aims to help fix that problem by making directives for common form inputs, such state or phone numbers. These form inputs are client validated so the use will get instant feedback, very popular for todays form.


## Form Input Inculded ##
_Note: The form elements are US validated_
* General Input
* Textarea
* Email
* Password
* Website / URL
* Phone number (US)
* State
* Zip Code
* Radio Buttons Groups
* Checkbox Groups
* Date picker ( UI.Bootstrap required)
* Confirm Dialog ( UI.Bootstrap required)

## Examples ##
* Coming Soon!

## Installation ##
* This depends on Bootstrap & UI.Bootstrap, Please include these first
* Include the compiled file
      <script src="path/praticalforms.js"></script>
* Add the module as a dependence of the angular app
      angular.modular("app", ['PractialForms']);
* Add the directive to the form
      <pf-email-input ng-model="data.email"></pf-email-input>


## Issues ##
If you have issues, please report them. I will be more encourage to develop this further if there is activity.

## Contributing ##
* Feel free to fork this repo and help add/modify components. Pull request are welcome!
