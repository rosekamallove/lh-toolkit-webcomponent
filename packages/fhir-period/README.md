# fhir-period
The FHIR period datatype's custom element using HTML5 form fields. Simple element, which by default shows `start`, and
developer can specify `end` attribute for the tag. Shows datetime in the browser locale. Uses two `<input type="local-datetime" />` fields

### Attributes to fhir-period
 * `value` - `Object`
 * `start` - `Boolean`
 * `end` - `Boolean`
  ### License
  Mozilla Public License, v. 2.0.
  
  ### Typical Use:
  * With url:
  `<fhir-period url=""></fhir-period>`
  * Without url:
   `<fhir-period></fhir-period>`