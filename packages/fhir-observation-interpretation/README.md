# fhir-observation-interpretation

The fhir-observation-interpretation adds a categorical assessment of an observation value to the page. It is commonly used as a form field. It consists of three fields; codefield, systemfield and displayfield. It uses mwc-textfield and iron-ajax.

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 
 ###### a. GET:
 * It has three mwc-textfields which receives a value. `value` is passed as an Array that hold the input values for all the fields.
 * It can also receive value from a 'url' which can be passed as property "url". The `interpretation` key value is checked for in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `displayField`,`codeField`  and `systemField`property as true or false shows or hide the `display`,`code` and `system` values respectively.
 ###### b. SET:
 * Typing in each value in the textfield sets the value of the component and can be used for posting purposes.

### Properties of fhir-observation-interpretation
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `codeField`:`String` - the codeField is used to show the code for the interpretation of an observation. use this property to show/hide. Defaault  is false 
 * `systemField`: `String` - the systemField is used to show the system for the code of the interpretation of an observation. use this property to show/hide. Defaault  is false .
 *  `displayField`: `String` - the displayField is used to show the interpretation of an observation. use this property to show/hide. Defaault  is true
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-interpretation url=""></fhir-observation-interpretation>`
 * Without url:
  `<fhir-observation-interpretation></fhir-observation-interpretation>`
