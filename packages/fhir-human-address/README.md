# fhir-human-address

The fhir-human-address adds address line1, line2, city,district and use fields to your page. It is commonly used 
 as a form field. It uses select, mwc-textfield and iron-ajax.

### Functionality
  Default : shows empty mwc-textfield of address : use, line1, line2, city ad district for `display`. 
 ######a. GET:
 * It has mwc-textfields which receives  value. `value` can be passed as an Array.
 * It can also receive value from a 'url' which can be passed as property "url". The `address` key value is checked for  in key-value pair of data.
 * If it does not receive any value, it shows blank.
 * Setting `useSelect` property as true or false can help show and hide  field.
 * Setting `typeSelect` property as true or false can help show and hide field.
 * Setting `add1Field` property as true or false can help show and hide field.
 * Setting `add2Field` property as true or false can help show and hide field.
 * Setting `cityField` property as true or false can help show and hide field.
 * Setting `districtField` property as true or false can help show and hide field.
 * Setting `periodField` property as true or false can help show and hide field.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-human-address
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `useSelect`:`String` - selectable option for use of address. Use this property to show/hide. Default: true.
 * `typeSelect`:`String` - selectable option for type of address. Use this property to show/hide. Default: true.
 * `add1Field`:`String` - used to display address line 1. Use this property to show/hide. Default: true.
 * `add2Field`:`String` - used to display address line 2. Use this property to show/hide. Default: true.
 * `cityField`:`String` - used to display city. Use this property to show/hide. Default: true.
 * `districtField`:`String` - used to display district. Use this property to show/hide. Default: true.
 * `periodField`:`String` -  is to have start and end dates. Use this property to show/hide. Default: false  is to have start and end dates. Use this property to show/hide. Default: false 
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-human-address url=""></fhir-human-address>`
 * Without url:
  `<fhir-human-address></fhir-human-address>`
