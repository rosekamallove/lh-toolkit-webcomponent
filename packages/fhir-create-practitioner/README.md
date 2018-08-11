# fhir-create-practitioner

The fhir-create-practitioner creates a form/page to create a new patient with all reusable components like fhir-human-name,
fhir-human-certification, fhir-active-status, fhir-human-address, fhir-human-contact, human-gender, fhir-human-language and fhir-birth-date. It also uses iron-ajax and mwc-button.

### Functionality
  Default : shows a group of fields used in the components stated above for `display` along with a "Submit" button. 
* Typing in the value in textfield sets the value of the component.
* "url" can be provided using url property to direct where the data is to be posted.
* Pressing the button helps to post data to the desired url passed using url property.
* Data is posted in JSON format with `resourceType` as Practitioner.
### Properties of fhir-create-practitioner
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-create-practitioner url=""></fhir-create-practitioner>`
 * Without url:
  `<fhir-create-practitioner></fhir-create-practitioner>`
