# fhir-organisation-contact
The fhir-organisation-contact adds select option of purpose of contact to page along with name address and contact details. It is commonly used 
 as a form field. It uses select, fhir-human-name, fhir-human-address,  fhir-human-contact and iron-ajax.

### Functionality
  Default : shows empty mwc-textfield of contact: select purpose, name, address and contact for `display`. 
 ######a. GET:
 * It has mwc-textfields which receives  value. `value` can be passed as an Array.
 * It can also receive value from a 'url' which can be passed as property "url". The `contact` key value is checked for  in key-value pair of data.
 * If it does not receive any value, it shows blank.
 * Setting `purposeField` property as true or false can help show and hide  field.
 * Setting `nameField` property as true or false can help show and hide field.
 * Setting `addressField` property as true or false can help show and hide field.
 * Setting `contactField` property as true or false can help show and hide field.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-organisation-contact
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `purposeField`:`String` - selectable option to show purpose of contact. Use this property to show/hide. Default: true.
 * `nameField`:`String` - to show name of human for this organization. Use this property to show/hide. Default: true.
 * `addressField`:`String` - used to display address of contactable person. Use this property to show/hide. Default: true.
 * `contactField`:`String` - used to show telecom details of contact. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-organisation-contact url=""></fhir-organisation-contact>`
 * Without url:
  `<fhir-organisation-contact></fhir-organisation-contact>`
