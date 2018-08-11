# fhir-organisation-type

The fhir-organisation-type adds type of organisation to page with its identifier. It is commonly used 
 as a form field. It uses input type "select", mwc-textfield and iron-ajax.

### Functionality
  Default : shows a selectable input field and an mwc text-field for `display`. Options includes various categories of organizations like
  organizational team, health provider, government, Insurance company etc and its Identifier fields .
 ######a. GET:
 * It selects option from available select options along with its identifier when it receives a value. `value` can be passed as a array.
 * It can also receive value from a 'url' which can be passed as property "url". The `type` key value is checked for  in key-value pair of data.
 * If it does not receive any matching value, it shows blank.
 * Setting `typeField` property as true or false can help show and hide this selectable field.
 * Setting `systemField` property as true or false can help show and hide this identifier field.
 ######b. SET:
 * A selection of option and typing in the identifier sets the value of the component used for posting purposes.

### Properties of fhir-organisation-type
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `typeField`:`String` - selectable option for type of organization. Use this property to show/hide. Default: true.
 * `systemField`:`String` - to show use of system uri of organization. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-organisation-type url=""></fhir-organisation-type>`
 * Without url:
  `<fhir-organisation-type></fhir-organisation-type>`
