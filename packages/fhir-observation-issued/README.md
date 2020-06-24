# fhir-observation-issued

The `<fhir-observation-issued>` adds the time and date an observation was issued to a page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 In typical use, just use `<fhir-observation-issued url=""></fhir-observation-issued>`. It uses date-time input and iron-ajax.

### Functionality
  Default : shows an empty date-time input field for `display`
 ###### a. GET:
 * It displays date time when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `obsIssued` key value is checked for  in key-value pair of data.
 * Setting `obsIssued` property as true or false can help show and hide this component.

 ######b. SET:
 * An input of date-time value is taken as its value and used for posting purposes.

### Properties of fhir-observation-issued,
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `obsIssued`:`String` - used to show the date and time an observation was issued. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-issued url=""></fhir-observation-issued>`
 * Without url:
  `<ffhir-observation-issued></fhir-observation-issued>`
