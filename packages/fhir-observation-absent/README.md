# fhir-observation-absent

The fhir-observation-absent  adds the reason  for the absence of an expected observation to page. It is commonly used as a form field. It consists of three fields; codefield, systemfield and displayfield. It uses mwc-textfield and iron-ajax.

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 
 ###### a. GET:
 * It has three mwc-textfields which receives a value. `value` is passed as an array that hold the input vales for all the fields.
 * It can also receive value from a 'url' which can be passed as property "url". The `dataAbsentReason` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `codeField`  and `systemField`property as true or false shows or hide the `code` and `system` values respectively.
 ###### b. SET:
 * Typing in each value in the textfield sets the value of the component and can be used for posting purposes.

### Properties of fhir-observation-absent
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `codeField`:`String` - the codeField is used to show the code of the observation absent reason. use this property to show/hide. Defaault  is false
 * `systemField`: `String` - the systemField is used to show the system of an observation absent reason. use this property to show/hide. Defaault  is false
 *  `displayField`: `String` - the displayField is used to show the observation absent reason. use this property to show/hide. Defaault  is true
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-absent url=""></fhir-observation-absent>`
 * Without url:
  `<fhir-observation-absent></fhir-observation-absent>`
