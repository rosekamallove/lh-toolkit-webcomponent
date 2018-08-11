# fhir-create-location

The fhir-create-location creates a form/page to create a new location with all reusable components. It uses 
 fhir-organisation-name, fhir-location-status, fhir-location-operationalstatus, fhir-location-description,
 fhir-location-mode, fhir-human-contact, fhir-human-address, mwc-button and iron-ajax.

### Functionality
  Default : shows a group of fields used in the components stated above for `display` along with a "Submit" button. 
 * Typing in the value in textfield sets the value of the component.
 * "url" can be provided using url property to direct where the data is to be posted.
* Pressing the button helps to post data to the desired url passed using url property.
* Data is posted in JSON format with `resourceType` as Location.
### Properties of fhir-create-location
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-create-location url=""></fhir-create-location>`
 * Without url:
  `<fhir-create-location></fhir-create-location>`
