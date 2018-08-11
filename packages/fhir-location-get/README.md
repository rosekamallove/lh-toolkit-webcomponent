# fhir-location-get
fhir-location-get creates a form/page to display existing location with all reusable components. It uses
fhir-person-identifier, fhir-organisation name, fhir-location-status, fhir-location-operationalstatus, fhir-location-description, fhir-location-mode, 
fhir-human-contact, fhir-human-address and iron-ajax.

### Functionality
 *  Default : shows a empty mwc-textfields for `display`. 
 * Resource type used to get is `Location`.
 * On passing `url` it gets data into the respective fields existing in the form.
 * If any field  does not receive any data it remains empty.
 
### Properties of fhir-location-get
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - is used to make AJAX call to FHIR resource. Default: null.
 * `locationId`:`String` - is to used to define location Id. Use this property to show/hide. Default: true.
 * `locationName`:`String` - is used to define location name. Use this property to show/hide. Default: true.
 * `locationstatus`:`String` - used to define location status. Use this property to show/hide. Default: true.
 * `locationoperation`:`String` - is used to define operational status of location. Use this property to show/hide. Default: true.
 * `locationationdescribe`:`String` - is used to define description of location. Use this property to show/hide. Default: true.
 * `locationMode`:`String` - is used to define mode of location as instance or kind. Use this property to show/hide. Default: true.
 * `locationContact`:`String` - is used to define telecom details of location. Use this property to show/hide. Default: true.
 * `locationAddress`:`String` - is used to define address of location. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-location-get url=""></fhir-location-get>`
 * Without url:
  `<fhir-location-get></fhir-location-get>`
