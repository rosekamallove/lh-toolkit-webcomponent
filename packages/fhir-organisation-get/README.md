# fhir-organisation-get
fhir-organisation-get creates a form/page to display existing organization with all reusable components. It uses
fhir-person-identifier, fhir-organisation name, fhir-active-status, fhir-organisation-type, fhir-organisation-contact, 
fhir-human-contact, fhir-human-address and iron-ajax.

### Functionality
 *  Default : shows a empty mwc-textfields for `display`. 
  * Resource type used to get is `Organization`.
 * On passing `url` it gets data into the respective fields existing in the form.
 * If any field  does not receive any data it remains empty.
 
### Properties of fhir-organisation-get
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - is used to make AJAX call to FHIR resource. Default: null.
 * `organisationId`:`String` - is to used to define organization Id. Use this property to show/hide. Default: true.
 * `organisationName`:`String` - is used to define organization name. Use this property to show/hide. Default: true.
 * `organisationActive`:`String` - used to define organization active status. Use this property to show/hide. Default: true.
 * `organisationContact`:`String` - is used to define organization contact relation deatils. Use this property to show/hide. Default: true.
 * `organisationTelecom`:`String` - is used to define organization contact details . Use this property to show/hide. Default: true.
 * `organisationAddress`:`String` - is used to define organization address. Use this property to show/hide. Default: true.
 * `organisationType`:`String` - is used to define organization type. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-organisation-get url=""></fhir-organisation-get>`
 * Without url:
  `<fhir-organisation-get></fhir-organisation-get>`
