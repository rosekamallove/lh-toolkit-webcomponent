# fhir-human-language

The fhir-human-language component is used to adds language used to communicate by an individual to the page with a checkbox to show which one is preferred. It is commonly used 
 as a form field. It uses mwc-textfield, mwc-checkbox and iron-ajax.

### Functionality
  Default : shows mwc-textfield and a checkbox for `display`
 ######a. GET:
 * It displays language in mwc-textfield and the checkbox 'checks' when it receives a value true and does not check when it receives a false value. `value` can be passed as a JSON.
 * It can also receive value from a URL which can be passed as property "url". The `communication` key value is checked for  in key-value pair of data.
 * Setting `langField` property as true or false can help show and hide this language field.
 ######b. SET:
 * On 'checking' the appropriate radio button, the value is set as `true` for the respective button value and not 'checking' sets it as `false` for all the radio button values.

### Properties of fhir-human-language
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `langField`:`String` - used to field to display language. Use this property to show/hide. Default: true.
 * `prefField`:`String` - used to to show if language is preferred or not. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-human-language url=""></fhir-human-language>`
 * Without url:
  `<fhir-human-language></fhir-human-language>`
