# fhir-observation-effectivedatetime

The `<fhir-observation-effectivedatetime>` adds observation effective date and time to the page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 In typical use, just use `<fhir-observation-effectivedatetime url=""></fhir-observation-effectivedatetime>`. It uses date-time input and iron-ajax.

### Functionality
  Default : shows an empty date-time input field for `display`
 ###### a. GET:
 * It displays date time when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `obsDateTime` key value is checked for  in key-value pair of data.
 * Setting `obsDateTime` property as true or false can help show and hide this component.

 ######b. SET:
 * An input of date-time value is taken as its value and used for posting purposes.

### Properties of fhir-observation-effectivedatetime
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `obsDateTime`:`String` - used to show an observation effective datetime. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-effectivedatetime url=""></fhir-observation-effectivedatetime>`
 * Without url:
  `<fhir-observation-effectivedatetime></fhir-observation-effectivedatetime>`
