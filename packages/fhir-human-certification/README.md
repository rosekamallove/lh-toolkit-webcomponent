# fhir-human-certification

The fhir-human-certification adds selection of qualification and identifier of qualification to the page. It is commonly used 
 as a form field. It uses select, mwc-textfield and iron-ajax.

### Functionality
  Default : shows empty qualification identifier and select field for `display`. 
 ######a. GET:
 * It has mwc-textfield which receives  value. `value` can be passed as an Array.
 * It can also receive value from a 'url' which can be passed as property "url". The `qualification` key value is checked for  in key-value pair of data.
 * If it does not receive any value, it shows blank.
 * Setting `systemIdentifier` property as true or false can help show and hide field.
 * Setting `periodField` property as true or false can help show and hide  field.

 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-human-certification
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `systemIdentifier`:`String` - displays identifier of certification. Use this property to show/hide. Default: true.
 * `periodField`:`String` -  is to have start and end dates. Use this property to show/hide. Default: false.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-human-certification url=""></fhir-human-certification>`
 * Without url:
  `<fhir-human-certification></fhir-human-certification>`
