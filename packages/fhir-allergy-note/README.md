# fhir-allergy-note

The fhir-allergy-note adds description of allergy to the page. It is commonly used 
 as a form field. It uses mwc-textfield and iron-ajax. It is very helpful to add free text in a form.

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 
 ######a. GET:
 * It has an mwc-textfield which receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `note` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `describeField` property as true or false can help show and hide this component.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-allergy-note
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `describeField`:`String` - is to fill in notes of allergy. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-allergy-note url=""></fhir-allergy-note>`
 * Without url:
  `<fhir-allergy-note></fhir-allergy-note>`
