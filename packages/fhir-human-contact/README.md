# fhir-human-contact
The fhir-human-contact adds fields to capture contact details and rank for usage. It is commonly used 
 as a form field. It uses select, mwc-textfield and iron-ajax.

### Functionality
  Default : shows empty mwc-textfield of contact: system, use, contact number, rank and period for `display`. 
 ######a. GET:
 * It has mwc-textfields which receives  value. `value` can be passed as an Array.
 * It can also receive value from a 'url' which can be passed as property "url". The `telecom` key value is checked for  in key-value pair of data.
 * If it does not receive any value, it shows blank.
 * Setting `useField` property as true or false can help show and hide  field.
 * Setting `systemField` property as true or false can help show and hide field.
 * Setting `contNumb` property as true or false can help show and hide field.
 * Setting `rankVal` property as true or false can help show and hide field.
 * Setting `periodField` property as true or false can help show and hide field.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-human-contact
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `useField`:`String` - selectable option for use of contact. Use this property to show/hide. Default: true.
 * `systemField`:`String` - select system of contact. Use this property to show/hide. Default: true.
 * `contNumb`:`String` - used to display contact number. Use this property to show/hide. Default: true.
 * `rankVal`:`String` - used to display ranking of preference of numbers. Use this property to show/hide. Default: true.
 * `periodField`:`String` -  is to have start and end dates. Use this property to show/hide. Default: false  is to have start and end dates. Use this property to show/hide. Default: false 
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-human-contact url=""></fhir-human-contact>`
 * Without url:
  `<fhir-human-contact></fhir-human-contact>`
