# fhir-medication-ingredient

The fhir-medication-ingredient adds the actual ingredient of a medication to page. It is commonly used as a form field. It consists of three fields; activeField, strengthField and codingField. It uses mwc-textfield and iron-ajax.

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 
 ###### a. GET:
 * It has three mwc-textfields which receives a value. `value` is passed as an Object that hold the input values for all the fields.
 * It can also receive value from a 'url' which can be passed as property "url". The `ingredient` key value is checked for in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `activeField`,`strengthField`  and `codingField`property as true or false shows or hide the `active`,`strength` and `code` values respectively.
 ###### b. SET:
 * Typing in each value in the textfield sets the value of the component and can be used for posting purposes.

### Properties of fhir-medication-ingredient
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `activeField`:`String` - activeField is used to show the active status of a medication ingredient. Use this property to show/hide. Default: true
 * `strengthField`: `String` -strengthField is used to show the strength of a medication ingredient. Use this property to show/hide. Default: true
 *  `codingField`: `String` -codingField is used to show the code of a medication ingredient. Use this property to show/hide. Default: true
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-medication-ingredient url=""></fhir-medication-ingredient>`
 * Without url:
  `<fhir-medication-ingredient></fhir-medication-ingredient>`
