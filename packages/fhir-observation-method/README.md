# fhir-observation-method

The fhir-observation-method adds the mechanism used to perform the observation to a page. It is commonly used as a form field. It consists of three fields; codefield, systemfield and displayfield. It uses mwc-textfield and iron-ajax.

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 
 ###### a. GET:
 * It has three mwc-textfields which receives a value. `value` is passed as an Object that hold the input values for all the fields.
 * It can also receive value from a 'url' which can be passed as property "url". The `method` key value is checked for in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `displayField`,`codeField`  and `systemField`property as true or false shows or hide the `display`,`code` and `system` values respectively.
 ###### b. SET:
 * Typing in each value in the textfield sets the value of the component and can be used for posting purposes.

### Properties of fhir-observation-method
 * `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `codeField`:`String` - the codeField is used to show the code of an observation method. use this property to show/hide. Default  is false 
 * `systemField`: `String` - the systemField is used to show the system of an observation method. use this property to show/hide. Default  is false.
 *  `displayField`: `String` -the displayField is used to show the observation method used. use this property to show/hide. Default  is true
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-method url=""></fhir-observation-method>`
 * Without url:
  `<fhir-observation-method></fhir-observation-method>`
