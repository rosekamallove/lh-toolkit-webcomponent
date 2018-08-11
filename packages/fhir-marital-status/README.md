# fhir-marital-status

The fhir-marital-status component is used to display the marital status of the individual on the page. It is commonly used 
 as a form field. It uses mwc-radio and iron-ajax.

### Functionality
  Default : shows an non-checked radio buttons for `display`
 ######a. GET:
 * It 'checks' when it receives a value true and does not check when it receives a false value. `value` can be passed as a string.
 * It can also receive value from a URL which can be passed as property "url". The `maritalStatus` key value is checked for  in key-value pair of data.
 * Setting `tableResponsive` property as true or false can help show and hide this component.
 ######b. SET:
 * On 'checking' the appropriate radio button, the value is set as `true` for the respective button value and not 'checking' sets it as `false` for all the radio button values.

### Properties of fhir-marital-status
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `tableResponsive`:`String` - used to show the radio buttons representing marital status of person from given options.
  Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-marital-status url=""></fhir-marital-status>`
 * Without url:
  `<fhir-marital-status></fhir-marital-status>`
