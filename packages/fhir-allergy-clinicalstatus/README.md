# fhir-allergy-clinicalstatus

The fhir-allergy-clinicalstatus add clinical status of allergy to  page. It is commonly used 
 as a form field. It uses input type "select" and iron-ajax.It is a coded concept in FHIR and hence hard-coded into the pattern.

### Functionality
  Default : shows a selectable input field for `display`. Options include: active, inactive and resolved.
 ######a. GET:
 * It selects option from available select options when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `clinicalStatus` key value is checked for  in key-value pair of data.
  * If it does not receive any matching value, it shows blank.
 * Setting `typeField` property as true or false can help show and hide this component.
 ######b. SET:
 * A selection of option sets the value of the component used for posting purposes.

### Properties of fhir-allergy-clinicalstatus
 * `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `typeField`:`String` - selectable option clinical status of allergy. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-allergy-clinicalstatus url=""></fhir-allergy-clinicalstatus>`
 * Without url:
  `<fhir-allergy-clinicalstatus></fhir-allergy-clinicalstatus>`
