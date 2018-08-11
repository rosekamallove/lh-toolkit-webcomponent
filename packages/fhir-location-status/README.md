# fhir-location-status

The fhir-location-status adds status of the location to page. It is commonly used 
 as a form field. It uses select and iron-ajax. This component is a coded concept and hence the mode is hard-coded as per FHIR standards.

### Functionality
  Default : shows an empty select field for `display`. 
 ######a. GET:
 * It has a select field which receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `status` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `statusField` property as true or false can help show and hide this component.
 ######b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-location-status
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `statusField`:`String` - is to show status of location . Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-location-status url=""></fhir-location-status>`
 * Without url:
  `<fhir-location-status></fhir-location-status>`
