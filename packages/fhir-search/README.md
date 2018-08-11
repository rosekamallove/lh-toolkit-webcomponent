# fhir-search

The fhir-search adds search to your page and shows the results in form of a grid. Uses mwc-textfield, vaadin-grid and iron-ajax. It is commonly used 
 as a form field. It displays ID, Name and Active status of the search subject.

### Functionality
  *  Default : shows a empty mwc-textfield field  with a table for `display`. 
  * It searches for the first three letter match in the database or server you have given with `url`
  *  Shows results matching search in vaadin-grid with id, active status and name of search subject.
### Properties of fhir-search
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `relocateurl`:`String` - used to direct to the relocation path on selection of items.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-search url="" relocateurl=""></fhir-search>`
 * Without url:
  `<fhir-search></fhir-search>`
