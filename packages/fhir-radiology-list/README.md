# fhir-radiology-list

The fhir-radiology-list component is used to list all the radiology orders. It is commonly used
as a table. It uses vaadin-grid and iron-ajax.

### Functionality

Default : Shows a table with Accession No., Patient, Urgency, Scheduled Date, Date Activated, and Date Stopped

orders: Is an array that contains the data for radiology orders in an array format

### Properties of fhir-radiology-list

- `orders`:`Array` - used to map all the rows in the table
- `url`:`String` - used to make AJAX call to FHIR resource. Default: null.

### License

Mozilla Public License, v. 2.0.

### Typical Use:

- With url:
  `<fhir-radiology-list url=""></fhir-radiology-list>`
- Without url:
  `<fhir-radiology-list></fhir-radiology-list>`
