# fhir-allergy-onset

The fhir-allergy-onset adds allergy onset date to the page. It is commonly used 
 as a form field. It uses datetime input and iron-ajax. The display format is mm/dd/yyyy hh:mm:ss format.

### Functionality
  Default : shows an empty date-time input field for `display`
 ######a. GET:
 * It displays date time when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `onset` key value is checked for  in key-value pair of data.
 * Setting `onsetDate` property as true or false can help show and hide this component.
 ######b. SET:
 * An input of date-time value is taken as its value and used for posting purposes.

### Properties of fhir-allergy-onset
 * `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `onsetDate`:`String` - used to show persons allergy onset date. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-allergy-onset url=""></fhir-allergy-onset>`
 * Without url:
  `<fhir-allergy-onset></fhir-allergy-onset>`