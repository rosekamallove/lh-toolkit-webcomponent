# fhir-organisation-name

The fhir-organisation-name adds description of allergy to the page. It is commonly used 
 as a form field. It uses mwc-textfield and iron-ajax. 

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 
 ######a. GET:
 * It has an mwc-textfield which receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `name` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `nameField` property as true or false can help show and hide this component.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-organisation-name
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `nameField`:`String` - is used to show name of organization. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-organisation-name url=""></fhir-organisation-name>`
 * Without url:
  `<fhir-organisation-name></fhir-organisation-name>`
