# fhir-searchbox

The fhir-searchbox adds search to your page and shows the results in form of a dropdown list box. Uses vaadin-combo-box, mwc-button and iron-ajax. It is commonly used 
 as a form field. It displays id and name  of the search subject.

### Functionality
  *  Default : shows a empty vaadin-combo-box field and an mwc-button  for `display`. 
  * It searches for the first three letter match in the database or server you have given with `url`
  *  Shows results matching search in vaadin-combo-box with id and name of search subject.
  * On hitting the mwc-button, the redirection takes place to the required path provided in `relocateurl`
### Properties of fhir-searchbox
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `relocateurl`:`String` - used to direct to the relocation path on selection of items.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-searchbox url="" relocateurl=""></fhir-searchbox>`
 * Without url:
  `<fhir-searchbox></fhir-searchbox>`
