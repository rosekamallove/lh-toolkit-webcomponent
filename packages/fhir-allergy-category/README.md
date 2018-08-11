# fhir-allergy-category

The fhir-allergy-category adds category of allergy to page. It is commonly used 
 as a form field. It uses input type "select" and iron-ajax.It is a coded concept in FHIR and hence hard-coded into the pattern.

### Functionality
  Default : shows a selectable input field for `display`. Options include : food, medication, environmental and biological.
 ######a. GET:
 * It selects and option from available select options when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `category` key value is checked for  in key-value pair of data.
  * If it does not receive any matching value, it shows blank.
 * Setting `typeField` property as true or false can help show and hide this component.
 ######b. SET:
 * A selection of option sets the value of the component used for posting purposes.

### Properties of fhir-allergy-category
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `typeField`:`String` - selectable option category of allergy. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-allergy-category url=""></fhir-allergy-category>`
 * Without url:
  `<fhir-allergy-category></fhir-allergy-category>`
