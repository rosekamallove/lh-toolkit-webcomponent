# fhir-person-identifier

The fhir-person-identifier adds select option for use and two mwc-textfields to page to display the system uri and its identifier. It is commonly used 
 as a form field. It uses input type "select", mwc-textfield and iron-ajax.

### Functionality
  Default : shows a selectable input field and an mwc text-field for `display`.
 ######a. GET:
 * It selects option from available select options along with its identifier when it receives a value. `value` can be passed as a array.
 * It can also receive value from a 'url' which can be passed as property "url". The `identifier` key value is checked for  in key-value pair of data.
 * If it does not receive any matching value, it shows blank.
 * Setting `useField` property as true or false can help show and hide this use field.
 * Setting `systemIdentifier` property as true or false can help show and hide this system identifier field.
 * Setting `identifierField` property as true or false can help show and hide this identifier field.
 * Setting `periodField` property as true or false can help show and hide this period field.
 ######b. SET:
 * A selection of option and typing in the identifier sets the value of the component used for posting purposes.

### Properties of fhir-person-identifier
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `useField`:`String` - selectable option to show use of below fields. Use this property to show/hide. Default: true.
 * `systemIdentifier`:`String` -  to show system identifier number. Use this property to show/hide. Default: true.
 * `identifierField`:`String` - to show identifier number. Use this property to show/hide. Default: true.
 * `periodField`:`String` - to show its validity period. Use this property to show/hide. Default: false.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-person-identifier url=""></fhir-person-identifier>`
 * Without url:
  `<fhir-person-identifier></fhir-person-identifier>`
