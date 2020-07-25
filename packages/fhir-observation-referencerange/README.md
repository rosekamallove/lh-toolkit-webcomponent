# fhir-observation-referencerange

The fhir-observation-referencerange adds how to interpret the value of an observation by comparing to a normal or recommended range to the page.
It houses the low and high limits and its interpretation.
It uses mwc-textfield, `fhir-range`, `fhir-coding` and iron-ajax.

### Functionality
  Default : shows an empty value and interpretation field for `display`. 
 ###### a. GET:
 * It recieves its value into the `fhir-range`, `fhir-coding` and mwc-textfield. `value` can be passed as an array.
 * It can also receive value from a 'url' which can be passed as property "url". The `referenceRange` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `typeField`, `ageField` and `textField` property as true or false can help show and hide this component.
 ###### b. SET:
 * Typing in the value in textfields sets the value of the component used for posting purposes for text and interpretation. tHe value of the range(value and age) cannot be set.

### Properties of fhir-observation-referencerange
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `ageField`:`String` - the codeField is used to show the age at which the reference range is applicable. use this property to show/hide. Default  is true */ 
 * `textField`: `String` - the textField shows text based reference range in an observation when the range is not quantitiative. use this property to show/hide. Default  is false */
 * `typeField`: `String` -typeField shows the codes that indicates what part of the targeted reference population it applies to. use this property to show/hide. Default  is true  */

 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-referencerange url=""></fhir-observation-referencerange>`
 * Without url:
  `<fhir-observation-referencerange></fhir-observation-referencerange>`
  * With value
  `<fhir-observation-referencerange value =""></fhir-observation-referencerange>`
