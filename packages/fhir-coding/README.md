# fhir-coding

The FHIR Coding datatype's custom element using HTML5 form fields. Usually used within CodeableConcept.

### Functionlity
 * Default : shows an empty input field for `display`
 * Populates inputs via properties when a Coding is passed into the property `value` as a JSON (string or object)
 * Populates inputs via GET request when a URL is specified together with a dot-syntax string of JSON keys (jsonPath) 
 to access the coding. e.g. `'serviceType.0.coding.0'` to access inside the response 
 ```
 "serviceType": [ {
     "coding": [ {
       "system": "http://snomed.info/sct",
       "code": "90",
       "display": "Oral Surgery"
     }, {
     ...
 }
 ```
 * A label for `display` can be specified using the property `displayLabel`
 * Setting `showDisplay`, `showSystem`, `showVersion`, `showCode` and `showUserSelected` to true or false will decide
 whether or not the relavant input fields get rendered.


### Attributes to fhir-coding
 * `value` - `Object`
 * `url` - `String`
 * `jsonPath` - `String`
 * `displayLabel` - `String`
 * `showDisplay` - `String`
 * `showSystem` - `String`
 * `showVersion` - `String`
 * `showCode` - `String`
 * `showUserSelected` - `String`
