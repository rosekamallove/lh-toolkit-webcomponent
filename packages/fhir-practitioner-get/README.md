# fhir-practitioner-get
fhir-practitioner-get creates a form/page to display existing patient with all reusable components. It uses
 fhir-human-name, fhir-active-status, fhir-human-certification, fhir-birth-date, 
fhir-human-contact, fhir-human-address, fhir-human-gender, fhir-human-language and iron-ajax.

### Functionality
 *  Default : shows a empty mwc-textfields for `display`. 
 * Resource type used to get is `Practitioner`.
 * On passing `url` it gets data into the respective fields existing in the form.
 * If any field  does not receive any data it remains empty.
 
### Properties of fhir-practitioner-get
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - is used to make AJAX call to FHIR resource. Default: null.
 * `practitionerName`:`String` - is to used to define practitioner name. Use this property to show/hide. Default: true.
 * `practitionerActive`:`String` - is used to define practitioner active status. Use this property to show/hide. Default: true.
 * `practitionerQualification`:`String` - used to define qualification of practitioner. Use this property to show/hide. Default: true.
 * `practitionerBirthday`:`String` - is used to define birth date of practitioner . Use this property to show/hide. Default: true.
 * `practitionerGender`:`String` - is used to define gender of  practitioner. Use this property to show/hide. Default: true.
 * `practitionerContact`:`String` - is used to define contact details of practitioner. Use this property to show/hide. Default: true.
 * `practitionerAddress`:`String` - is used to define address of practitioner. Use this property to show/hide. Default: true.
 * `practitionerLanguage`:`String` - is used to define language for communication. Use this property to show/hide. Default: true.

  ### License
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-practitioner-get url=""></fhir-practitioner-get>`
 * Without url:
  `<fhir-practitioner-get></fhir-practitioner-get>`
