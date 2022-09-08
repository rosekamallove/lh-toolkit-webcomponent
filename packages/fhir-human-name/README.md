# fhir-human-address

The fhir-human-name adds use field, prefix, suffix, first name, middle name and last name to the page. It is commonly used
as a form field. It uses select, mwc-textfield and iron-ajax.

### Functionality

Default : shows empty mwc-textfields of name : use, prefix, suffix, first name, middle name and last name for `display`.
######a. GET:

- It has mwc-textfields which receives value. `value` can be passed as a Array.
- It can also receive value from a 'url' which can be passed as property "url". The `name` key value is checked for in key-value pair of data.
- If it does not receive any value, it shows blank.
- Setting `useField` property as true or false can help show and hide field.
- Setting `suffixField` property as true or false can help show and hide field.
- Setting `prefixField` property as true or false can help show and hide field.
- Setting `fName` property as true or false can help show and hide field.
- Setting `lName` property as true or false can help show and hide field.
- Setting `mName` property as true or false can help show and hide field.
- Setting `periodField` property as true or false can help show and hide field.
  ######b. SET:
- Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-human-name

- `value`:`Array` - used to take the input value of each field.
- `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
- `useField`:`String` - selectable option for use of name. Use this property to show/hide. Default: true.
- `suffixField`:`String` - shows suffix. Use this property to show/hide. Default: true.
- `prefixField`:`String` - shows prefix. Use this property to show/hide. Default: true.
- `fName`:`String` - shows first name of a person. Use this property to show/hide. Default: true.
- `lName`:`String` - shows last name of a person. Use this property to show/hide. Default: true.
- `mName`:`String` - shows middle name of a person. Use this property to show/hide. Default: false.
- `periodField`:`String` - is to have start and end dates. Use this property to show/hide. Default: false is to have start and end dates. Use this property to show/hide. Default: false

### License

Mozilla Public License, v. 2.0.

### Typical Use:

- With url:
  `<fhir-human-name url=""></fhir-human-name>`
- Without url:
  `<fhir-human-name></fhir-human-name>`
