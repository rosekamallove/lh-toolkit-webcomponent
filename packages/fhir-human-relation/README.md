# fhir-human-relation

The fhir-human-relation adds type of relation, name gender, address and contact to the page.It is commonly used 
 as a form field. It uses fhir-human-name, fhir-human-gender, fhir-human-address and fhir-human-contact components, select and iron-ajax.

### Functionality
  Default : shows empty mwc-textfields of name : type of relation, name gender, address and contact  for `display`. 
 ######a. GET:
 * It has mwc-textfields which receives  value. `value` can be passed as a Array.
 * It can also receive value from a 'url' which can be passed as property "url". The `contact` key value is checked for  in key-value pair of data.
 * If it does not receive any value, it shows blank.
 * Setting `relationType` property as true or false can help show and hide  field.
 * Setting `nameField` property as true or false can help show and hide field.
 * Setting `genderField` property as true or false can help show and hide field.
 * Setting `addressField` property as true or false can help show and hide field.
 * Setting `contactField` property as true or false can help show and hide field.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-human-relation
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `relationType`:`String` - used to show type of relationship.Use this property to show/hide. Default: true.
 * `nameField`:`String` - used to show name of person. Use this property to show/hide. Default: true.
 * `genderField`:`String` - used to show gender of person. Use this property to show/hide. Default: true.
 * `addressField`:`String` - used to show address of relation. Use this property to show/hide. Default: true.
 * `contactField`:`String` - used to show telecom details. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-human-relation url=""></fhir-human-relation>`
 * Without url:
  `<fhir-human-relation></fhir-human-relation>`
