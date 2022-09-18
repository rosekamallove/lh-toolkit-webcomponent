# fhir-active-status

The fhir-active-status component is used to determine whether the record is in active use. It is commonly used 
 as a form field. It uses mwc-checkbox and iron-ajax.

### Functionality
  Default : shows an empty checkbox for `display`
 ######a. GET:
 * It 'checks' when it receives a value true and does not check when it receives a false value. `value` can be passed as a string.
 * It can also receive value from a URL which can be passed as property "url". The `activeStatus` key value is checked for  in key-value pair of data.
 * Setting `activeStatus` property as true or false can help show and hide this component.
 ######b. SET:
 * On 'checking' the box, the value is set as `true` and not 'checking' sets it as `false`.

### Properties of fhir-active-status
 * `value`:`Boolean` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `activeStatus`:`String` - used to show active status of person true or false. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-active-status url=""></fhir-active-status>`
 * Without url:
  `<fhir-active-status></fhir-active-status>`
