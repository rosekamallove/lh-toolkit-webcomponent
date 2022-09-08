# fhir-radiology-filter

The fhir-radiology-filter adds use Accession Number, Patient Name or Id, Start date & End date, Urgencies. It is commonly used
as a form field for filtering. It uses select, mwc-textfield and iron-ajax.

### Functionality

Default : shows empty mwc-textfields of name : Accession Number, Patient Name, Patient ID, Start and End Date, Urgencies for `display`.
######a. GET:

- It has mwc-textfields which receives value. `value` can be passed as a Array.
- It can also receive value from a 'url' which can be passed as property "url". The `name` key value is checked for in key-value pair of data.
- If it does not receive any value, it shows blank.
- Setting `accessionNumber` property as true or false can help show and hide field.
- Setting `patientName` property as true or false can help show and hide field.
- Setting `patientId` property as true or false can help show and hide field.
- Setting `periodField` property as true or false can help show and hide field.
- Setting `urgency` property as true or false can help show and hide field.
  ######b. SET:
- Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-human-name

- `value`:`object` - used to take the input value of each field.
- `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
- `accessionNumber`:`String` - Accession Number input. Use this property to show/hide. Default: true.
- `patientName`:`String` - shows patient name. Use this property to show/hide. Default: true.
- `patientId`:`Number` - shows patient id. Use this property to show/hide. Default: true.
- `periodFiled`:`String` - shows start and end dates. Use this property to show/hide. Default: true.
- `urgency`:`String` - shows shows the urgency of the order. Use this property to show/hide. Default: true.

### License

Mozilla Public License, v. 2.0.

### Typical Use:

- With url:
  `<fhir-radiology-filter url=""></fhir-radiology-filter>`
- Without url:
  `<fhir-radiology-filter></fhir-radiology-filter>`
