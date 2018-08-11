# fhir-decease-status

The fhir-decease-status component is used to determine whether the individual is in deceased state by adding a check box
to the page. It is commonly used 
 as a form field. It uses mwc-checkbox and iron-ajax.

### Functionality
  Default : shows an empty checkbox for `display`
 ######a. GET:
 * It 'checks' when it receives a value true and does not check when it receives a false value. `value` can be passed as a string.
 * It can also receive value from a URL which can be passed as property "url". The `deceasedBoolean` key value is checked for  in key-value pair of data.
 * Setting `deceaseStatus` property as true or false can help show and hide this component.
 ######b. SET:
 * On 'checking' the box, the value is set as `true` and not 'checking' sets it as `false`.

### Properties of fhir-decease-status
 * `value`:`Boolean` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `deceaseStatus`:`String` - used to show deceased status of person true or false. Use this property to show/hide. Default: true.
 * `periodField`: `String`- used to have date of being deceased. Use this property to show/hide. Default: false 
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-decease-status url=""></fhir-decease-status>`
 * Without url:
  `<fhir-decease-status></fhir-decease-status>`
