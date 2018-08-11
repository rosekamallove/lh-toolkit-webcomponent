# fhir-create-patient  

The fhir-create-patient creates a form/page to create a new patient with all reusable components like fhir-active-status,
fhir-birth-date, fhir-decease-status, fhir-human-address, fhir-human-contact, human-gender, fhir-human-language, fhir-human-name,
fhir-human-relation, fhir-marital-status. It also uses iron-ajax and mwc-button.

### Functionality
  Default : shows a group of fields used in the components stated above for `display` along with a "Submit" button. 
* Typing in the value in textfield sets the value of the component.
* "url" can be provided using url property to direct where the data is to be posted.
* Pressing the button helps to post data to the desired url passed using url property.
* Data is posted in JSON format with `resourceType` as Patient.
### Properties of fhir-create-patient
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-create-patient url=""></fhir-create-patient>`
 * Without url:
  `<fhir-create-patient></fhir-create-patient>`
