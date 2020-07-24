# fhir-observation-note

The fhir-observation-note adds the comments about an observation to the page. It is commonly used 
 as a form field. It uses mwc-textarea and iron-ajax. It is very helpful to add free text in a form.

### Functionality
  Default : shows an empty mwc-textarea field for `display`. 
 ###### a. GET:
 * It has an mwc-textarea which receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `note` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `noteField` property as true or false can help show and hide this component.
 ###### b. SET:
 * Typing in the value in textarea sets the value of the component used for posting purposes.

### Properties of fhir-observation-note
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `noteField`:`String` - is to fill in the comments about an observation. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-note url=""></fhir-observation-note>`
 * Without url:
  `<fhir-observation-note></fhir-observation-note>`
  * With value
  `<fhir-observation-note value =""></fhir-observation-note>`
