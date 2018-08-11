# fhir-location-operationalstatus

The fhir-location-operationalstatus adds adds operational status of hospital to page. It is commonly used 
 as a form field. It uses select, mwc-textfield and iron-ajax.

### Functionality
  Default : shows a empty mwc-textfield and select field for `display`. 
 ######a. GET:
 * It has a select and  mwc-textfield which receives a value. `value` can be passed as an Object.
 * It can also receive value from a 'url' which can be passed as property "url". The `operationalStatus` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `typeField` property as true or false can help show and hide this select field.
 * Setting `systemField` property as true or false can help show and hide this mwc-textfield field.
 ######b. SET:
 * Typing/selecting the values in textfield sets the value of the component used for posting purposes.

### Properties of fhir-location-operationalstatus
 * `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `typeField`:`String` - is to show selectable option for operational status of location. Use this property to show/hide. Default: true.
 * `systemField`:`String` - is to textfield to show system URI of location. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-location-operationalstatus url=""></fhir-location-operationalstatus>`
 * Without url:
  `<fhir-location-operationalstatus></fhir-location-operationalstatus>`
