# fhir-patient-get
fhir-patient-get creates a form/page to display existing patient with all reusable components. It uses
fhir-person-identifier, fhir-human-name, fhir-active-status, fhir-decease-status, fhir-birth-date, 
fhir-human-contact, fhir-human-address, fhir-human-gender, fhir-marital-status, fhir-human-language, fhir-human-relation and iron-ajax.

### Functionality
 *  Default : shows a empty mwc-textfields for `display`. 
  * Resource type used to get is `Patient`.
 * On passing `url` it gets data into the respective fields existing in the form.
 * If any field  does not receive any data it remains empty.
 
### Properties of fhir-patient-get
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - is used to make AJAX call to FHIR resource. Default: null.
 * `patientId`:`String` - is to used to define patient Id. Use this property to show/hide. Default: true.
 * `patientName`:`String` - is used to define patient name. Use this property to show/hide. Default: true.
 * `patientActive`:`String` - used to define patient active status. Use this property to show/hide. Default: true.
 * `patientDecease`:`String` - is used to define patient deceased status. Use this property to show/hide. Default: true.
 * `patientBirthday`:`String` - is used to define patient birth date. Use this property to show/hide. Default: true.
 * `patientGender`:`String` - is used to define patient gender. Use this property to show/hide. Default: true.
 * `patientMarriage`:`String` - is used to define marital status of a patient. Use this property to show/hide. Default: true.
 * `patientContact`:`String` - is used to contact details of patient. Use this property to show/hide. Default: true.
 * `patientAddress`:`String` - is used to define address of patient. Use this property to show/hide. Default: true.
 * `patientLanguage`:`String` - is used to define communication language. Use this property to show/hide. Default: true.
 * `relationType`:`String` - is used to define relationship type. Use this property to show/hide. Default: true.
  ### License
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-patient-get url=""></fhir-patient-get>`
 * Without url:
  `<fhir-patient-get></fhir-patient-get>`
